// app/faq/page.tsx
import QnA from '@/components/QnA';

export default function FAQPage() {
  return (
    <section className="bg-green pb-6 lg:pb-16">
      <div className="flex flex-col items-center justify-center pt-10 lg:pt-16">
        <div className="w-full max-w-5xl px-5 py-4 lg:px-0 lg:py-5">
          <h2 className="uppercase border-black rounded-sm inline-block p-2 border text-sm mb-3">
            Frågor och svar
          </h2>

          <QnA />
        </div>
      </div>

      <div className="px-5 py-5 lg:px-0 md:py-8 w-full max-w-5xl m-auto flex justify-center">
        <a
          className="inline-block w-full bg-blue leading-none pt-4 pb-6 lg:pt-8 lg:pb-10 px-10 hover:rounded-4xl hover:bg-pink text-center text-white text-3xl lg:text-10xl"
          href="mailto:kontakt@ai-reformen.se"
        >
          Kontakta oss
        </a>
      </div>
    </section>
  );
}
