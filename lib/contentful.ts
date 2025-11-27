// lib/contentful.ts
import { createClient, type EntrySkeletonType } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

type ArticleSkeleton = EntrySkeletonType & {
  contentTypeId: 'pressRelease';
  fields: {
    title: string;
    subtitle?: string;
    date?: string;
  };
};

export async function getArticles() {
  const contentType = process.env.CONTENTFUL_ARTICLE_TYPE_ID || 'pressrelease';

  const res = await contentfulClient.getEntries<ArticleSkeleton>({
    content_type: contentType,
    order: ['-fields.date'],
    limit: 5,
  });

  return res.items;
}
