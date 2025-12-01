/* eslint-disable @typescript-eslint/no-explicit-any */
// app/nyheter/page.tsx
import { getArticles } from '@/lib/contentful';
import { ArticleItem } from '@/components/ArticleItem';

// very small helper for Contentful Rich Text -> plain text (one line per paragraph)
function richTextToPlainText(doc: any): string {
  if (!doc || !doc.content) return '';

  const paragraphs: string[] = [];

  for (const node of doc.content) {
    if (node.nodeType === 'paragraph' && Array.isArray(node.content)) {
      let text = '';
      for (const child of node.content) {
        if (child.nodeType === 'text' && typeof child.value === 'string') {
          text += child.value;
        }
      }
      if (text.trim()) {
        paragraphs.push(text.trim());
      }
    }
  }

  // one paragraph per line
  return paragraphs.join('\n');
}

export default async function NyheterPage() {
  const articles = await getArticles();

  if (!articles || articles.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="px-5 py-4 lg:px-0 lg:py-5 max-w-5xl w-full">
          <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-6">
            Pressmeddelanden
          </h2>
          <p className="opacity-75 text-xl">Inga pressmeddelanden ännu.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
      <div className="px-5 py-4 lg:px-0 lg:py-5 max-w-5xl w-full">
        <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-6">
          Pressmeddelanden
        </h2>

        {/* 3-column grid on lg: main content spans 2, sidebar spans 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left: main article content */}
          <ul className="space-y-10 lg:col-span-2">
            {articles.map((item) => {
              const f = item.fields as any;

              const fullText = f.body ? richTextToPlainText(f.body) : '';
              const allLines = fullText ? fullText.split('\n') : [];
              const snippet =
                allLines.length > 0 ? allLines.slice(0, 3).join('\n') : ''; // first 3 lines

              const id = `article-${item.sys.id}`;

              return (
                <li key={item.sys.id} id={id}>
                  <ArticleItem
                    id={id}
                    title={f.title}
                    subtitle={f.subtitle}
                    date={f.date}
                    snippet={snippet || fullText}
                    fullText={fullText}
                  />
                </li>
              );
            })}
          </ul>

          {/* Right: list of titles for quick navigation */}
          <aside className="hidden lg:block lg:border-l lg:pl-6">
            <h3 className="text-xs font-semibold uppercase mb-3">
              Alla pressmeddelanden
            </h3>
            <ul className="space-y-2 text-sm">
              {articles.map((item) => {
                const f = item.fields as any;
                const id = `article-${item.sys.id}`;
                return (
                  <li key={item.sys.id}>
                    <a href={`#${id}`} className="hover:underline">
                      {f.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
