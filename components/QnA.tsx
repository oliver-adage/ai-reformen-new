import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function QnA() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Vad är AI-reformen?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-md py-4 lg:py-6 lg:text-lg">
            AI-reformen är ett brett folkbildningsinitiativ som syftar till att
            öka kunskapen om AI. Initiativet erbjuder offentlig sektor och
            civilsamhället kostnadsfri tillgång till AI-verktyg och utbildning
            för att driva allmänbildning om AI i svenska samhället.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Vad är Insamlingsstiftelsen Svenska AI-reformen?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-md py-4 lg:py-6 lg:text-lg">
            Stiftelsen har grundats med målet att ge svenska medborgare och
            organisationer tillgång till AI-verktyg som kan förbättra deras
            vardag och arbete, och därigenom bidra till samhällsnytta.
            Stiftelsen, som är teknologineutral och politiskt oberoende,
            fokuserar på att folkbilda om och tillgängliggöra AI-lösningar och
            sänka trösklarna för AI-användning, så att fler kan dra nytta av
            tekniken
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Vad är Sana?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-md py-4 lg:py-6 lg:text-lg">
            Sana är ett svenskt AI-bolag som utvecklar produkter för att
            förbättra hur människor och organisationer får tillgång till och
            använder kunskap med hjälp av AI. Sana är både medfinnansiär av
            stiftelsen och stiftelsens första tekniska partner.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Hur får jag tillgång till tjänsten från Sana?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-md py-4 lg:py-6 lg:text-lg">
            Du ansöker via AI-reformens webbplats
            (https://sanalabs.com/ai-reform). Tillgång beviljas efter
            verifiering av att din organisation tillhör offentlig sektor eller
            civilsamhälle. Det kan ta upp till några arbetsdagar för din ansökan
            att bearbetas. Du får ett e-postmeddelande när du kan logga in och
            börja använda AI-tjänsterna. Vid exceptionellt hög efterfrågan kan
            utrullningen ske i etapper Tjänsten får användas för arbete och
            projekt kopplade till din organisation inom offentlig sektor eller
            civilsamhälle, enligt gällande användarvillkor. Försäkra dig om
            vilka policys som gäller på just din arbetsplats
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Kommer det mer?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-md py-4 lg:py-6 lg:text-lg">
            Ja, intentionen är att jobba brett med folkbildning om och tillgång
            till AI-tjänster. Stiftelsen är i sin linda och kommer löpande
            återkomma löpande med fler initiativ.
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
