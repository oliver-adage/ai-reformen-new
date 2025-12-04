// app/partners/page.tsx
import { contentfulClient } from '@/lib/contentful';

type TechnicalPartner = {
  id: string;
  name: string;
  description?: string;
  logoUrl?: string;
};

type CollaborationPartner = {
  id: string;
  name: string;
  description: string[];
  logoUrl?: string;
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

async function getTechnicalPartners(): Promise<TechnicalPartner[]> {
  const contentType =
    process.env.CONTENTFUL_TECHNICAL_PARTNER_TYPE_ID || 'technicalPartner';

  const res = await contentfulClient.getEntries({
    content_type: contentType,
    order: ['fields.companyName'],
    include: 1,
  });

  return (res.items as any[]).map((item) => {
    const fields = item.fields || {};
    const logoFile = fields.logo?.fields?.file;
    const logoUrl =
      logoFile?.url && typeof logoFile.url === 'string'
        ? `https:${logoFile.url}`
        : undefined;

    return {
      id: item.sys.id as string,
      name: fields.companyName as string,
      description: fields.description as string | undefined,
      logoUrl,
    };
  });
}

async function getCollaborationPartners(): Promise<CollaborationPartner[]> {
  const contentType =
    process.env.CONTENTFUL_COLLABORATION_PARTNER_TYPE_ID ||
    'collaborationPartner';

  const res = await contentfulClient.getEntries({
    content_type: contentType,
    order: ['fields.organizationName'],
    include: 2,
  });

  return (res.items as any[]).map((item) => {
    const fields = item.fields || {};
    const logoFile = fields.logo?.fields?.file;
    const logoUrl =
      logoFile?.url && typeof logoFile.url === 'string'
        ? `https:${logoFile.url}`
        : undefined;

    return {
      id: item.sys.id as string,
      name: fields.organizationName as string,
      description: richTextToParagraphs(fields.organizationDescription),
      logoUrl,
    };
  });
}

export default async function PartnersPage() {
  const [technicalPartners, collaborationPartners] = await Promise.all([
    getTechnicalPartners(),
    getCollaborationPartners(),
  ]);

  return (
    <section className="bg-blue text-white">
      <div className="flex flex-col items-center justify-center pt-10 pb-16 lg:pt-16 lg:pb-20">
        <div className="font-medium text-2xl px-5 py-4 lg:px-0 lg:py-5 max-w-5xl lg:text-5xl">
          <h2 className="text-white uppercase rounded-sm inline-block p-2 border border-white text-sm mb-3">
            Partners
          </h2>
          <p className="text-2xl lg:text-5xl lg:leading-12 mb-8">
            Tillsammans med vära partners gör vi AI-tjänster tillgängliga för
            fler organisationer i Sverige.
          </p>
        </div>

        {/* Technical partners */}
        <div className="w-full max-w-5xl px-5 lg:px-0">
          <h3 className="uppercase text-yellow rounded-sm inline-block p-2 border border-yellow text-sm mb-6">
            Tekniska partners
          </h3>

          {technicalPartners.length === 0 ? (
            <p className="text-lg opacity-80">
              Inga tekniska partners tillgängliga just nu.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="border border-yellow rounded-lg p-4 flex items-start gap-4 bg-blue/40"
                >
                  {partner.logoUrl && (
                    <div className="w-20 h-20 flex-shrink-0 bg-white flex items-center justify-center rounded">
                      <img
                        src={partner.logoUrl}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {partner.name}
                    </h4>
                    {partner.description && (
                      <p className="text-sm opacity-80">{partner.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Collaboration partners */}
        <div className="w-full max-w-5xl px-5 lg:px-0 mt-14">
          <h3 className="uppercase text-yellow rounded-sm inline-block p-2 border border-yellow text-sm mb-6">
            Samarbetspartners
          </h3>

          {collaborationPartners.length === 0 ? (
            <p className="text-lg opacity-80">
              Inga samarbetspartners tillgängliga just nu.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collaborationPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="border border-yellow rounded-lg p-4 bg-blue/40"
                >
                  <div className="flex items-start gap-4">
                    {partner.logoUrl && (
                      <div className="w-20 h-20 flex-shrink-0 bg-white flex items-center justify-center rounded">
                        <img
                          src={partner.logoUrl}
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {partner.name}
                      </h4>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2">
                    {partner.description.map((para, idx) => (
                      <p key={idx} className="text-sm opacity-80">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
