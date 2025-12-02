// lib/contentful.ts
import { createClient, type EntrySkeletonType, type EntryFieldTypes } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

type ArticleFields = {
  title: EntryFieldTypes.Text;
  subtitle?: EntryFieldTypes.Text;
  date?: EntryFieldTypes.Date;
};

type ArticleSkeleton = EntrySkeletonType<ArticleFields>;

export async function getArticles() {
  const contentType = process.env.CONTENTFUL_ARTICLE_TYPE_ID || 'pressrelease';

  const res = await contentfulClient.getEntries<ArticleSkeleton>({
    content_type: contentType,
    order: ['-fields.date'],
    limit: 5,
  });

  return res.items;
}
