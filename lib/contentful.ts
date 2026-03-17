// lib/contentful.ts
import { createClient, type EntrySkeletonType, type EntryFieldTypes } from 'contentful';

type ContentfulClient = ReturnType<typeof createClient>;

let contentfulClient: ContentfulClient | null | undefined;

function getContentfulConfig() {
  return {
    space: process.env.CONTENTFUL_SPACE_ID?.trim(),
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN?.trim(),
    environment: process.env.CONTENTFUL_ENVIRONMENT?.trim() || 'master',
  };
}

function isUsableValue(value: string | undefined) {
  if (!value) {
    return false;
  }

  const normalized = value.trim();

  if (!normalized) {
    return false;
  }

  return normalized.toUpperCase() !== 'DOESNOTEXIST';
}

export function resolveContentTypeId(
  candidates: Array<string | undefined>,
  fallback: string
) {
  for (const candidate of candidates) {
    if (isUsableValue(candidate)) {
      return candidate!.trim();
    }
  }

  return fallback;
}

export function hasContentfulConfig() {
  const { space, accessToken } = getContentfulConfig();
  return Boolean(space && accessToken);
}

export function getContentfulClient() {
  if (contentfulClient !== undefined) {
    return contentfulClient;
  }

  const { space, accessToken, environment } = getContentfulConfig();

  if (!space || !accessToken) {
    contentfulClient = null;
    return contentfulClient;
  }

  contentfulClient = createClient({
    space,
    accessToken,
    environment,
  });

  return contentfulClient;
}

export async function withContentfulClient<T>(
  operation: (client: ContentfulClient) => Promise<T>,
  fallback: T,
  label: string
) {
  const client = getContentfulClient();

  if (!client) {
    return fallback;
  }

  try {
    return await operation(client);
  } catch (error) {
    console.error(`Contentful request failed for ${label}.`, error);
    return fallback;
  }
}

type ArticleFields = {
  title: EntryFieldTypes.Text;
  summaryintro?: EntryFieldTypes.Text;
  publishDate?: EntryFieldTypes.Date;
  publishdate?: EntryFieldTypes.Date;
  body?: EntryFieldTypes.RichText;
};

type ArticleSkeleton = EntrySkeletonType<ArticleFields>;

function getArticleTimestamp(item: { fields?: Record<string, unknown> }) {
  const rawValue =
    item.fields?.publishDate ?? item.fields?.publishdate ?? undefined;

  if (typeof rawValue !== 'string') {
    return Number.NEGATIVE_INFINITY;
  }

  const timestamp = Date.parse(rawValue);
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
}

export async function getArticles() {
  const contentType = resolveContentTypeId(
    [
      process.env.CONTENTFUL_NEWS_CONTENT_TYPE_ID,
      process.env.CONTENTFUL_ARTICLE_TYPE_ID,
    ],
    'newsPressRelease'
  );

  return withContentfulClient(
    async (client) => {
      const res = await client.getEntries<ArticleSkeleton>({
        content_type: contentType,
        limit: 5,
      });

      return [...res.items].sort(
        (left, right) => getArticleTimestamp(right) - getArticleTimestamp(left)
      );
    },
    [],
    'articles'
  );
}
