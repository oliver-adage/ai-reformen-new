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
            href="#om"
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
            href="#press"
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
      <section
        id="om"
        className="flex flex-col items-center justify-center bg-yellow pt-10 pb-16 lg:pt-16 lg:pb-54"
      >
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
        <div className="grid grid-cols-4 mb-8 lg:mb-16 lg:grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
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
            <div className="mt-14 lg:mt-20">
              <h3 className="text-yellow text-xl lg:text-2xl mb-3 lg:mb-5">
                För offentlig sektor
              </h3>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <li className="col-span-1 text-md bg-white-10 rounded-2xl min-h-72 flex flex-col justify-between p-4">
                  <p>
                    Myndigheten för digital förvaltning (Digg) har samlat
                    information om AI och hur du och din verksamhet kan använda
                    generativ AI på ett ansvarsfullt och säkert sätt
                  </p>
                  <a className="underline" href="https://www.digg.se/ai">
                    Läs mer
                  </a>
                </li>
                <li className="col-span-1 text-md bg-white-10 rounded-2xl min-h-72 flex flex-col justify-between p-4">
                  <p>
                    Digg har tillsammans med Imy också tagit fram riktlinjerna
                    som vägleder offentliga aktörer så att de kan använda
                    generativ AI på ett medvetet och ansvarsfullt sätt.
                  </p>
                  <a
                    className="underline"
                    href="https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai/om-riktlinjerna"
                  >
                    Läs mer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 pt-8 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow lg:col-span-4 lg:col-start-9">
            <h3 className="text-yellow text-xl lg:text-2xl mb-3 lg:mb-5">
              Utbildningar - introducerande
            </h3>
            <ul className="mb-12">
              <li>
                <a href="https://www.ai.se/sv/tillampning/kurser-och-kompetensutveckling/intro-till-generativ-ai">
                  Intro till Generativ AI från AI Sweden
                </a>
              </li>
              <li>
                <a href="https://www.ai.se/sv/tillampning/kurser-och-kompetensutveckling/starta-din-ai-resa-onlinekurs">
                  Starta din AI-resa, e-utbildning från AI Sweden
                </a>
              </li>
              <li>
                <a href="https://www.elementsofai.com/">
                  Elements of AI, e-utbildning från Helsiniki University
                </a>
              </li>
            </ul>
            <h3 className="text-yellow text-xl lg:text-2xl mb-3 lg:mb-5">
              Utbildningar - fördjupande
            </h3>
            <ul>
              <li>
                <a href="https://openlearning.mit.edu/news/explore-world-artificial-intelligence-online-courses-mit">
                  MIT - Open learning
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="press" className="bg-blue text-white px-5 md:px-8 md:py-8">
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
          <div className="col-span-3 lg:col-span-2 lg:col-start-7 text-xs">
            <h3 className="text-yellow mb-2">Presskontakt:</h3>
            <p>Namn Efternamn</p>
            <p>
              <span>E-post: </span>
              <a className="text-yellow" href="mailto:press@aireformen.se">
                press@aireformen.se
              </a>
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-5">
          <li className="col-span-4 lg:col-span-1 border-t border-white pt-4 relative mb-8 before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-white">
            <span className="block text-sm mb-2">2025-05-07</span>
            <h3 className="text-xl lg:text-2xl mb-3 lg:mb-5">
              Ny stiftelse erbjuder gratis AI-verktyg till offentliganställda,
              studenter och civilsamhälle
            </h3>
            <p className="text-md mb-3 lg:mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tempus urna eget blandit. Ut posuere sollicitudin
              congue. Vivamus semper, turpis congue viverra dapibus, tortor
              lectus bibendum nibh, ac vehicula ligula leo ac arcu.
            </p>
            {/* <a href="#" className="underline">
              Läs mer
            </a> */}
          </li>
        </ul>
      </section>
    </>
  );
}
