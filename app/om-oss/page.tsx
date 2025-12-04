// app/om-oss/page.tsx
import { contentfulClient } from '@/lib/contentful';

type Biography = {
  id: string;
  name: string;
  portraitUrl: string;
  presentation: string[];
};

function richTextToParagraphs(doc: any): string[] {
  if (!doc || !Array.isArray(doc.content)) return [];

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

  return paragraphs;
}

async function getBiographies(): Promise<Biography[]> {
  const contentType = process.env.CONTENTFUL_BIOGRAPHY_TYPE_ID || 'biography';

  const res = await contentfulClient.getEntries({
    content_type: contentType,
    order: ['fields.firstNameLastName'],
    include: 2,
  });

  return (res.items as any[]).map((item) => {
    const fields = item.fields || {};
    const portraitFile = fields.portrait?.fields?.file;
    const portraitUrl =
      portraitFile?.url && typeof portraitFile.url === 'string'
        ? `https:${portraitFile.url}`
        : '';

    return {
      id: item.sys.id as string,
      name: fields.firstNameLastName as string,
      portraitUrl,
      presentation: richTextToParagraphs(fields.presentation),
    };
  });
}

export default async function OmOssPage() {
  const biographies = await getBiographies();

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
          {biographies.length === 0 ? (
            <p className="col-span-4 lg:col-span-8 text-lg">
              Inga biografier tillgångliga just nu.
            </p>
          ) : (
            biographies.map((bio) => (
              <div key={bio.id} className="group col-span-4 lg:col-span-2">
                {bio.portraitUrl && (
                  <div className="w-full h-auto overflow-hidden">
                    <img
                      src={bio.portraitUrl}
                      alt={bio.name}
                      className="w-full h-auto group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                )}
                <div className="pt-3 mt-3 border-t border-yellow relative before:absolute before:top-1 before:left-0 before:w-full before:h-[1px] before:bg-yellow">
                  <h3 className="text-2xl mb-2">{bio.name}</h3>
                  {bio.presentation.map((text, idx) => (
                    <p key={idx} className="text-md opacity-75">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
