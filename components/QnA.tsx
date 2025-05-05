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
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            AI-reformen är ett folkbildningsinitiativ som syftar till att öka
            kunskapen om AI genom att erbjuda offentlig sektor och
            civilsamhället kostnadsfri tillgång till avancerade AI-verktyg.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Vad är Sana?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Sana är ett svenskt teknikföretag som utvecklar plattformar för att
            använda och integrera AI-modeller på ett säkert och effektivt sätt.
            Sana är teknisk partner till AI-reformen.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Hur får jag tillgång till tjänsten?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Du ansöker via AI-reformens webbplats. Efter verifiering av att din
            organisation tillhör offentlig sektor eller civilsamhälle får du
            tillgång.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Hur lång tid tar det innan jag får tillgång till tjänsten?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Det kan ta upp till några arbetsdagar för din ansökan att bearbetas.
            Du får ett e-postmeddelande när du kan logga in och börja använda
            AI-tjänsterna.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Vilka AI-modeller kan jag använda?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Tjänsten ger tillgång till flera av världens ledande AI-modeller
            från exempelvis OpenAI, Google och Anthropic.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Hur får jag använda tjänsten?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Tjänsten får användas för arbete och projekt kopplade till din
            organisation inom offentlig sektor eller civilsamhälle, enligt
            gällande användarvillkor. Försäkra sig om vilka policys som gäller
            på just din arbetsplats.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Får jag använda tjänsten i mitt jobb?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Ja, tjänsten är skapad just för användning i offentlig verksamhet
            och civilsamhälle. Försäkra sig om vilka regler som gäller på just
            din arbetsplats.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Är tjänsten säker att använda?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Ja, tjänsten är byggd med fokus på datasäkerhet och följer svenska
            och europeiska regelverk som GDPR.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Används information jag lägger in i tjänsten för att träna
          AI-modeller?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Nej, information du lägger in används inte för att träna de
            bakomliggande AI-modellerna.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Hur använder Sana den information jag laddar upp i tjänsten?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Information används endast för att leverera och förbättra tjänstens
            funktioner, enligt tydliga sekretessavtal. Ingen data säljs vidare
            eller används för träning av externa modeller.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Får jag använda verktyget hur mycket jag vill?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Tjänsten är kostnadsfri och obegränsad i rimlig omfattning. Vid
            extremt hög användning kan begränsningar införas för att säkerställa
            tillgänglighet för alla.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Hur länge kommer tjänsten att finnas?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Målet är att erbjuda tjänsten långsiktigt, men tillgången kan bero
            på finansiering och samarbetsavtal. I dagsläget har vi finansiering
            för att driva tjänsten i ungefär ett år. Eventuella förändringar
            kommuniceras i god tid.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13" className="border-black-25">
        <AccordionTrigger className="text-xl lg:text-2xl cursor-pointer">
          Var vänder jag mig för att få support och hjälp?
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-light-green text-md p-4 lg:p-6 rounded-2xl">
            Support nås via Sana.
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
