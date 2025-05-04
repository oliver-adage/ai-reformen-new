import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frågor och svar',
};

export default function QNA() {
  return (
    <>
      <h1>Frågor och svar</h1>
      <dl>
        <dt>Vad är AI-reformen?</dt>
        <dd>
          AI-reformen är ett folkbildningsinitiativ som syftar till att öka
          kunskapen om AI genom att erbjuda offentlig sektor och civilsamhället
          kostnadsfri tillgång till avancerade AI-verktyg.{' '}
        </dd>

        <dt>Vad är Sana?</dt>
        <dd>
          Sana är ett svenskt teknikföretag som utvecklar plattformar för att
          använda och integrera AI-modeller på ett säkert och effektivt sätt.
          Sana är teknisk partner till AI-reformen.
        </dd>

        <dt>Hur får jag tillgång till tjänsten?</dt>
        <dd>
          Du ansöker via AI-reformens webbplats. Efter verifiering av att din
          organisation tillhör offentlig sektor eller civilsamhälle får du
          tillgång.
        </dd>

        <dt>Hur lång tid tar det innan jag får tillgång till tjänsten?</dt>
        <dd>
          Det kan ta upp till några arbetsdagar för din ansökan att bearbetas.
          Du får ett e-postmeddelande när du kan logga in och börja använda
          AI-tjänsterna.
        </dd>

        <dt>Vilka AI-modeller kan jag använda?</dt>
        <dd>
          Tjänsten ger tillgång till flera av världens ledande AI-modeller från
          exempelvis OpenAI, Google och Anthropic.
        </dd>

        <dt>Hur får jag använda tjänsten?</dt>
        <dd>
          Tjänsten får användas för arbete och projekt kopplade till din
          organisation inom offentlig sektor eller civilsamhälle, enligt
          gällande användarvillkor. Försäkra sig om vilka policys som gäller på
          just din arbetsplats.
        </dd>

        <dt>Får jag använda tjänsten i mitt jobb?</dt>
        <dd>
          Ja, tjänsten är skapad just för användning i offentlig verksamhet och
          civilsamhälle. Försäkra sig om vilka regler som gäller på just din
          arbetsplats.
        </dd>

        <dt>Är tjänsten säker att använda?</dt>
        <dd>
          Ja, tjänsten är byggd med fokus på datasäkerhet och följer svenska och
          europeiska regelverk som GDPR.
        </dd>

        <dt>
          Används information jag lägger in i tjänsten för att träna
          AI-modeller?
        </dt>
        <dd>
          Nej, information du lägger in används inte för att träna de
          bakomliggande AI-modellerna.
        </dd>

        <dt>Hur använder Sana den information jag laddar upp i tjänsten?</dt>
        <dd>
          Information används endast för att leverera och förbättra tjänstens
          funktioner, enligt tydliga sekretessavtal. Ingen data säljs vidare
          eller används för träning av externa modeller.
        </dd>

        <dt>Får jag använda verktyget hur mycket jag vill?</dt>
        <dd>
          Tjänsten är kostnadsfri och obegränsad i rimlig omfattning. Vid
          extremt hög användning kan begränsningar införas för att säkerställa
          tillgänglighet för alla.
        </dd>

        <dt>Hur länge kommer tjänsten att finnas?</dt>
        <dd>
          Målet är att erbjuda tjänsten långsiktigt, men tillgången kan bero på
          finansiering och samarbetsavtal. I dagsläget har vi finansiering för
          att driva tjänsten i ungefär ett år. Eventuella förändringar
          kommuniceras i god tid.
        </dd>

        <dt>Var vänder jag mig för att få support och hjälp?</dt>
        <dd>Support nås via Sana.</dd>
      </dl>
    </>
  );
}
