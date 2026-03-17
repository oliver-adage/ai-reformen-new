/* eslint-disable @typescript-eslint/no-explicit-any */
// app/partners/page.tsx
import { resolveContentTypeId, withContentfulClient } from '@/lib/contentful';

export const dynamic = 'force-dynamic';

type TechnicalPartner = {
  id: string;
  name: string;
  description: string[];
  logoUrl?: string;
  partnerType?: string;
};

type CollaborationPartner = {
  id: string;
  name: string;
  description: string[];
  logoUrl?: string;
  partnerType?: string;
};

type Partner = {
  id: string;
  name: string;
  description: string[];
  logoUrl?: string;
  partnerType?: string;
};

function fieldToParagraphs(value: any): string[] {
  if (!value) return [];

  if (typeof value === 'string') {
    return value
      .split('\n')
      .map((part) => part.trim())
      .filter(Boolean);
  }

  if (!Array.isArray(value.content)) return [];

  const paragraphs: string[] = [];

  for (const node of value.content) {
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

function classifyPartnerType(type: string | undefined) {
  const normalized = type?.trim().toLowerCase() || '';

  if (
    normalized.includes('tech') ||
    normalized.includes('tekn') ||
    normalized.includes('technical')
  ) {
    return 'technical';
  }

  return 'collaboration';
}

async function getPartners(): Promise<Partner[]> {
  const contentType = resolveContentTypeId(
    [process.env.CONTENTFUL_PARTNER_TYPE_ID],
    'partner'
  );

  return withContentfulClient(
    async (client) => {
      const res = await client.getEntries({
        content_type: contentType,
        order: ['fields.order', 'fields.name'],
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
          name: fields.name as string,
          description: fieldToParagraphs(fields.shortDescription),
          logoUrl,
          partnerType: fields.type as string | undefined,
        };
      });
    },
    [],
    'partners'
  );
}

export default async function PartnersPage() {
  const partners = await getPartners();
  const technicalPartners: TechnicalPartner[] = partners.filter(
    (partner) => classifyPartnerType(partner.partnerType) === 'technical'
  );
  const collaborationPartners: CollaborationPartner[] = partners.filter(
    (partner) => classifyPartnerType(partner.partnerType) === 'collaboration'
  );

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
                    {partner.description.length > 0 && (
                      <p className="text-sm opacity-80">
                        {partner.description.join(' ')}
                      </p>
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
