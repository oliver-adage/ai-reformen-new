import Image from 'next/image';
import QnA from '@/components/QnA';
export default function Home() {
  return (
    <>
      <section className="lg:flex items-start">
        <div className="px-5 pt-8 pb-10 lg:px-8 lg:pb-12 lg:pt-14 lg:w-1/2">
          <h1 className="text-4xl font-medium lg:text-7xl mb-10 lg:mb-16">
            Sverige ska bli världsledande inom{' '}
            <span className="text-nowrap">AI-tillämpning.</span>
          </h1>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="https://www.sanalabs.com"
          >
            <div>
              <h2 className="text-lg lg:text-2xl">Registering</h2>
              <p className="text-md opacity-45">
                Är du offentliganställd, student eller verksam inom
                civilsamhället?
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Ansök här
            </span>
          </a>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="#"
          >
            <div>
              <h2 className="text-xl lg:text-2xl">Om AI-reformen</h2>
              <p className="text-md opacity-45">
                Läs mer om stiftelsen, våra grundare och hur vi finansieras.
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Läs mer
            </span>
          </a>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="#"
          >
            <div>
              <h2 className="text-xl lg:text-2xl">För journalister</h2>
              <p className="text-md opacity-45">
                Pressmeddelanden, kontaktuppgifter och mer om AI-reformen.
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Läs mer
            </span>
          </a>
        </div>
        <Image
          className="w-full h-auto lg:w-1/2"
          src="/image00.jpg"
          alt="AI-Reformen"
          width={720}
          height={720}
        />
      </section>
      <section className="flex flex-col items-center justify-center bg-yellow pt-10 pb-16 lg:pt-16 lg:pb-54">
        <h2 className="uppercase rounded-sm inline-block p-2 border border-black text-sm mb-10 lg:mb-34">
          Vår idé
        </h2>
        <p className="text-center font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-4xl lg:text-5xl">
          AI förändrar världen snabbt. Men risken är stor att vissa halkar
          efter. Vår vision är lika enkel som den är stor: Sverige ska bli
          världsledande inom AI-tillämpning. Det åstadkommer vi genom att sänka
          trösklarna och göra AI tillgängligt för alla de som bygger samhället
          varje dag: offentlig sektor, akademi och civilsamhälle.
        </p>
      </section>
      <section className="bg-blue text-white px-5 py-4 md:px-8 md:py-8">
        <div className="grid grid-cols-4 mb-8 lg:mb-16 lg:grid-cols-8 gap-5">
          <div className="col-span-4">
            <h2 className="uppercase text-yellow rounded-sm inline-block p-2 border border-yellow text-sm mb-6">
              Vilka vi är
            </h2>
            <p className="text-lg text-white lg:text-2xl">
              Svenska AI-reformen grundades av Olof Hernell, Nicklas Berild
              Lundblad och Joel Hellermark. I stiftelsens styrelse ingår också
              forskaren och folkbildaren Emma Frans.
            </p>
          </div>
          <p className="text-sm text-yellow col-span-3 lg:col-span-z lg:col-start-7">
            Vi är icke-kommersiella, politiskt oberoende och teknikneutrala.
            Våra resurser investeras i vårt syfte: att främja kunskap om och
            användning av AI i Sverige
          </p>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-5">
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/emma-frans.jpg"
                alt="Emma Frans"
                width={326}
                height={326}
                className="w-full h-auto group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
              <h3 className="text-2xl mb-2">Emma Frans</h3>
              <p className="text-md opacity-75">
                Forskare, folkbildare och vetenskapskommunikatör. Två gånger
                utsedd till Årets Folkbildare.
              </p>
            </div>
          </div>
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/joel-hellermark.jpg"
                alt="Joel Hellermark"
                width={326}
                height={326}
                className="w-full h-auto group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
              <h3 className="text-2xl mb-2">Joel Hellermark</h3>
              <p className="text-md opacity-75">Grundare och VD för Sana.</p>
            </div>
          </div>
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/olof-hernell.jpg"
                alt="Olof Hernell"
                width={326}
                height={326}
                className="w-full h-auto group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
              <h3 className="text-2xl mb-2">Olof Hernell</h3>
              <p className="text-md opacity-75">
                Digitaliseringschef på Stegra. Tidigare på Google, EQT och
                ledamot i regeringens AI-kommission.
              </p>
            </div>
          </div>
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/nicklas-berild-lundblad.jpg"
                alt="Nicklas Berild Lundblad"
                width={326}
                height={326}
                className="w-full h-auto group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
              <h3 className="text-2xl mb-2">Nicklas Berild Lundblad</h3>
              <p className="text-md opacity-75">
                Författare, forskare och policyexpert. Tidigare på Google,
                DeepMind och ledamot i regeringens AI-kommission.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-54">
          <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-10 lg:mb-34">
            Hur vi finansieras
          </h2>
          <p className="text-center font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-4xl lg:text-5xl">
            Svenska AI-reformen finansieras av privata donationer från Sana*,
            Thomas von Koch, Sven Hagströmer, Erik och Staffan Salén samt
            Carl-Henric Svanberg. De initiala bidragen beräknas täcka våra
            kostnader under det första året. Vår verksamhet är helt
            icke-kommersiell.
          </p>
        </div>
        <p className="text-sm px-5 py-4 md:px-8 md:py-5 max-w-xl">
          *Sana är ett svenskt AI-bolag som utvecklar produkter för att
          förbättra hur människor och organisationer får tillgång till och
          använder kunskap med hjälp av AI. Företagets produkter används av
          ledande organisationer som Merck, Hinge Health, Electrolux och Svea
          Solar. Sana stöds av världsledande investerare som NEA, Menlo Ventures
          och EQT Ventures. 
        </p>
      </section>
      <section className="bg-green">
        <div className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-54">
          <h2 className="uppercase border-black rounded-sm inline-block p-2 border text-sm mb-10 lg:mb-34">
            Frågor och svar
          </h2>
          <div className="w-full max-w-4xl px-5 py-4 md:px-8 md:py-5">
            <QnA />
          </div>
        </div>
      </section>
      <section className="bg-blue text-white px-5 py-4 md:px-8 md:py-8">
        <div className="grid grid-cols-4 mb-8 lg:mb-16 lg:grid-cols-8 gap-5">
          <div className="col-span-4">
            <h2 className="uppercase text-yellow rounded-sm inline-block p-2 border border-yellow text-sm mb-6">
              AI-resurser
            </h2>
            <p className="text-lg text-white lg:text-2xl">
              Det är vår övertygelse att det bästa sättet att lära sig är genom
              att göra. Men ibland kan man behöva en liten hjälp på traven.
              Därför har vi samlat några utmärkta resurser som hjälper dig att
              ta dina ai-kunskaper till nästa nivå. Alla resurser är förstås
              kostnadsfria. 
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue text-white px-5 md:px-8 md:py-8">
        <div className="grid grid-cols-4 mb-8 lg:mb-16 lg:grid-cols-8 gap-5 border-t border-yellow py-4 lg:py-8 relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
          <div className="col-span-4">
            <h2 className="uppercase text-yellow rounded-sm inline-block p-2 border border-yellow text-sm mb-6">
              Press
            </h2>
            <p className="text-lg text-white lg:text-2xl">
              Här hittar du pressmeddelanden, pressbilder och kontaktuppgifter
              om Svenska AI-reformen. Välkommen att höra av dig!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
