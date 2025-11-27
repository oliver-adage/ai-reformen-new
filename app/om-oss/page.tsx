// app/om-oss/page.tsx
import Image from 'next/image';

export default function OmOssPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-yellow pt-10 pb-16 lg:pt-16 lg:pb-20">
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
          {/* Joel */}
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

          {/* Lisa */}
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

          {/* Nicklas */}
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

          {/* Olof */}
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
    </>
  );
}
