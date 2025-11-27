// app/nyheter/page.tsx

export default function NyheterPage() {
  return (
    <section className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
      <div className="font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-5xl lg:text-5xl">
        <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-3">
          Pressmeddelande
        </h2>
        <p className="text-2xl lg:text-5xl lg:leading-12 mb-8">
          Svenska AI-reformen bedrivs helt utan kommersiella syften och
          finansieras av privata donationer – med alla resurser återinvesterade
          i initiativets syfte.
        </p>
        <p className="text-xl lg:text-2xl mb-8">
          Den initiala finansieringen av stiftelsen kommer från AI-bolaget Sana
          samt generösa donationer från privatpersonerna Thomas von Koch, Sven
          Hagströmer, Carl-Henric Svanberg samt Erik &amp; Staffan Salén.
        </p>
        <p className="text-xl lg:text-2xl mb-8">
          Stiftelsen fortsätter att ta in donationer för att löpande kunna
          lansera fler initiativ (se{' '}
          <a
            className="underline"
            href="/insamlingsstiftelsen-svenska-ai-reformen-upprop.pdf"
          >
            vårt upprop
          </a>
          ). Kontaktuppgifter finns längst ner på sidan.
        </p>

        {/* Placeholder for future Contentful-powered news list */}
        <div className="mt-12 text-xl lg:text-2xl">
          <h3 className="uppercase text-sm mb-3">Nyheter</h3>
          <p className="opacity-75">
            Här kommer nyheter och uppdateringar att publiceras.
          </p>
        </div>
      </div>
    </section>
  );
}
