// app/partners/page.tsx

export default function PartnersPage() {
  return (
    <section className="bg-blue text-white">
      <div className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-5xl lg:text-5xl">
          <h2 className="text-white uppercase rounded-sm inline-block p-2 border border-white text-sm mb-3">
            Stiftelsens första teknikpartner: Sana
          </h2>
          <p className="text-2xl lg:text-5xl lg:leading-12 mb-8">
            Sana är både medfinansiär av stiftelsen{' '}
            <span className="block">
              och stiftelsens första tekniska partner.
            </span>
          </p>
          <p className="text-xl lg:text-2xl mb-8">
            Som en del av Svenska AI-reformen lanserar Sana en satsning på att
            göra sin AI-plattform, Sana Agents, tillgänglig för offentlig
            sektor, skolor och ideella organisationer. Syftet är att öka
            AI-användningen bland 2,3 miljoner svenskar genom att ge tillgång
            till avancerade verktyg för informationssökning, automatisering och
            problemlösning. Intresserade kan ansöka via Sanas hemsida, och
            tillgång ges efter verifiering av behörighet.
          </p>
        </div>
      </div>
    </section>
  );
}
