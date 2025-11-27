// app/nyheter/page.tsx
import { getArticles } from '@/lib/contentful';

export default async function NyheterPage() {
  const articles = await getArticles();

  return (
    <section className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
      <div className="px-5 py-4 lg:px-0 lg:py-5 max-w-5xl w-full">
        <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-6">
          Pressmeddelanden
        </h2>

        {/* Article list from Contentful */}
        {articles.length === 0 && (
          <p className="opacity-75 text-xl">Inga pressmeddelanden ännu.</p>
        )}

        <ul className="space-y-10">
          {articles.map((item) => {
            const f = item.fields as any; // lightweight workaround for typing

            return (
              <li key={item.sys.id} className="border-b pb-6">
                <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
                {f.subtitle && (
                  <p className="text-lg opacity-80 mb-2">{f.subtitle}</p>
                )}
                {f.date && (
                  <p className="text-sm opacity-60">
                    {new Date(f.date).toLocaleDateString('sv-SE')}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
