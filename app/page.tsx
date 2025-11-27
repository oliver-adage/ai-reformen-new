import Image from 'next/image';
import QnA from '@/components/QnA';

export default function Home() {
  return (
    <>
      <section className="lg:flex items-start">
        <div className="px-5 pt-8 pb-10 lg:px-8 lg:pb-12 lg:pt-14 lg:w-1/2">
          <h1 className="text-4xl font-medium lg:text-4xl xl:text-6xl mb-10 lg:mb-16">
            Sverige ska bli världsledande inom tillämpad AI. Och då måste alla
            med. Nu.
          </h1>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="#om"
          >
            <div>
              <h2 className="text-lg lg:text-2xl">
                Om Stiftelsen Svenska AI-reformen
              </h2>
              <p className="text-md opacity-45">
                Stiftelsens syfte och grundare
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Läs mer
            </span>
          </a>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="#pressmeddelande"
          >
            <div>
              <h2 className="text-lg lg:text-2xl">
                Pressmeddelande
              </h2>
              <p className="text-md opacity-45">
                Information
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Läs mer
            </span>
          </a>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="#finansiering"
          >
            <div>
              <h2 className="text-xl lg:text-2xl">Så finansieras stiftelsen</h2>
              <p className="text-md opacity-45">
                Vår finansiering och stiftelsens donatorer
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Läs mer
            </span>
          </a>
          <a
            className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
            href="https://sanalabs.com/ai-reform"
          >
            <div>
              <h2 className="text-xl lg:text-2xl">
                Registrering för Sana Agents
              </h2>
              <p className="text-md opacity-45">
                Är du offentliganställd, student eller verksam inom
                civilsamhället?
              </p>
            </div>
            <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
              Ansök här
            </span>
          </a>
        </div>
        <Image
          className="w-full h-auto lg:w-1/2"
          src="/image01.png"
          alt="AI-Reformen"
          width={720}
          height={720}
        />
      </section>
      <section
        id="om"
        className="flex flex-col items-center justify-center bg-yellow pt-10 pb-16 lg:pt-16 lg:pb-20"
      >
        <div className="font-medium px-5 py-4 lg:px-0 lg:py-5 max-w-5xl">
          <h2 className="uppercase rounded-sm inline-block p-2 border border-black text-sm mb-3">
            Vårt syfte
          </h2>
          <p className="mb-8 text-2xl lg:text-5xl lg:leading-12">
            För att minska digitala klyftor, skapa samhällsnytta och stärka
            landets digitala suveränitet i en tid av ökat internationellt
            teknikberoende är det av stor vikt att AI görs tillgänglig för alla
            i Sverige.
          </p>
          <p className="mb-8 text-xl lg:text-2xl">
            Stiftelsen Svenska AI-reformen, som är teknologineutral och
            politiskt oberoende, har som ändamål är att främja tillgång och
            kunskap till tillämpad AI för svenska medborgare och organisationer,
            företrädesvis inom offentlig sektor, skolor, universitet, forskning,
            icke-vinstdrivande organisationer och föreningar inom
            civilsamhället.
          </p>
          <p className="mb-8 text-xl lg:text-2xl">
            Stiftelsen fokuserar på praktisk AI-användning som skapar
            samhällsnytta. AI-tjänsterna som förmedlas ska i huvudsak vara
            kostnadsneutrala, kunna nyttjas i stor skala och leda till ökad
            effektivitet, lärande eller service.
          </p>
        </div>
      </section>
      <section className="bg-blue text-white px-5 pt-10 pb-10 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-4 py-4 mb-8 lg:mb-16 lg:py-5 lg:grid-cols-8 gap-5">
          <div className="col-span-4">
            <h2 className="uppercase text-yellow rounded-sm inline-block p-2 border border-yellow text-sm mb-6">
              Vilka vi är
            </h2>
            <p className="text-white text-2xl lg:text-5xl lg:leading-12 mb-6">
              Svenska AI-reformen grundades av Olof Hernell, Nicklas Berild
              Lundblad och Joel Hellermark. I stiftelsens styrelse ingår också
              Lisa Lindström.
            </p>
            <p className="text-white text-xl lg:text-2xl">
              Svenska AI-reformen är en ideell, partipolitiskt oberoende och
              teknikneutral organisation. Vi verkar för att öka tillgången till
              och kunskapen om tillämpad AI i Sveriges offentliga och civila
              sektor. Verksamheten bedrivs helt utan kommersiella syften och
              finansieras av privata donationer.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-5">
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/joel-hellermark.jpg"
                alt="Joel Hellermark"
                width={1080}
                height={1080}
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
                src="/lisa-lindstrom.jpg"
                alt="Lisa Lindström"
                width={1080}
                height={1080}
                className="w-full h-auto group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
              <h3 className="text-2xl mb-2">Lisa Lindström</h3>
              <p className="text-md opacity-75">
                Partner på EY. Grundare och tidigare VD av Doberman.
              </p>
            </div>
          </div>
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/nicklas-berild-lundblad.jpg"
                alt="Nicklas Berild Lundblad"
                width={1080}
                height={1080}
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
          <div className="group col-span-2">
            <div className="w-full h-auto overflow-hidden">
              <Image
                src="/olof-hernell.jpg"
                alt="Olof Hernell"
                width={1080}
                height={1080}
                className="w-full h-auto group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
              <h3 className="text-2xl mb-2">Olof Hernell</h3>
              <p className="text-md opacity-75">
                Managing Director, Portfolio Operations, Digital and AI på
                Investor. Tidigare på Stegra, Google, EQT och ledamot i
                regeringens AI-kommission
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="pressmeddelande">
        <div className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
          <div className="font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-5xl lg:text-5xl">
            <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-3">
              Pressmeddelande
            </h2>
            <p className="text-2xl lg:text-5xl lg:leading-12 mb-8">
              Svenska AI-reformen bedrivs helt utan kommersiella syften och
              finansieras av privata donationer – med alla resurser
              återinvesterade i initiativets syfte.
            </p>
            <p className="text-xl lg:text-2xl mb-8">
              Den initiala finansieringen av stiftelsen kommer från AI-bolaget
              Sana samt generösa donationer från privatpersonerna Thomas von
              Koch, Sven Hagströmer, Carl-Henric Svanberg samt Erik & Staffan
              Salén.
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
              ). Kontaktuppgifter finns längst ner på sidan
            </p>
          </div>
        </div>
      </section>
      <section id="finansiering">
        <div className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
          <div className="font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-5xl lg:text-5xl">
            <h2 className="text-black uppercase rounded-sm inline-block p-2 border border-black text-sm mb-3">
              Hur vi finansieras
            </h2>
            <p className="text-2xl lg:text-5xl lg:leading-12 mb-8">
              Svenska AI-reformen bedrivs helt utan kommersiella syften och
              finansieras av privata donationer – med alla resurser
              återinvesterade i initiativets syfte.
            </p>
            <p className="text-xl lg:text-2xl mb-8">
              Den initiala finansieringen av stiftelsen kommer från AI-bolaget
              Sana samt generösa donationer från privatpersonerna Thomas von
              Koch, Sven Hagströmer, Carl-Henric Svanberg samt Erik & Staffan
              Salén.
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
              ). Kontaktuppgifter finns längst ner på sidan
            </p>
          </div>
        </div>
      </section>

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
              till avancerade verktyg för informationssökning, automatisering
              och problemlösning. Intresserade kan ansöka via Sanas hemsida, och
              tillgång ges efter verifiering av behörighet.
            </p>
          </div>
        </div>
      </section>

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
    </>
  );
}
