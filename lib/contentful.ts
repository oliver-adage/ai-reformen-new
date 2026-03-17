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
  body?: EntryFieldTypes.RichText;
};

type ArticleSkeleton = EntrySkeletonType<ArticleFields>;

export async function getArticles() {
  const contentType =
    process.env.CONTENTFUL_NEWS_CONTENT_TYPE_ID?.trim() ||
    process.env.CONTENTFUL_ARTICLE_TYPE_ID?.trim() ||
    'newsPressRelease';

  return withContentfulClient(
    async (client) => {
      const res = await client.getEntries<ArticleSkeleton>({
        content_type: contentType,
        order: ['-fields.publishDate'],
        limit: 5,
      });

      return res.items;
    },
    [],
    'articles'
  );
}
