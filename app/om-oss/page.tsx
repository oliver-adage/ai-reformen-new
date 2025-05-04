import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss',
};

export default function AboutUs() {
  return (
    <div>
      <h1>Om oss</h1>
      <p>
        Svenska AI-reformen är en ideell, politiskt oberoende stiftelse som
        arbetar för att fler i Sverige ska få tillgång till modern AI-teknik. Vi
        tror att AI är ett kraftfullt verktyg som kan skapa nytta för hela
        samhället – men bara om kunskap och tillgång delas brett.
      </p>
      <section>
        <h2>Vår idé</h2>
        <p>
          AI förändrar världen snabbt. Men risken är stor att vissa halkar
          efter. Vår vision är lika enkel som den är stor: Sverige ska bli
          världsledande inom AI-tillämpning. Det åstadkommer vi genom att sänka
          trösklarna och göra AI tillgängligt för alla de som bygger samhället
          varje dag: offentlig sektor, akademi och civilsamhälle.
        </p>
      </section>
      <section>
        <h2>Vilka vi är</h2>
        <p>
          Svenska AI-reformen grundades av Olof Hernell, Nicklas Berild Lundblad
          och Joel Hellermark. I stiftelsens styrelse ingår också forskaren och
          folkbildaren Emma Frans.
        </p>
        <p>
          Vi är icke-kommersiella, politiskt oberoende och teknikneutrala. Våra
          resurser investeras i vårt syfte: att främja kunskap om och användning
          av AI i Sverige.
        </p>
      </section>
      <section>
        <h2>Hur vi finansieras</h2>
        <p>
          Svenska AI-reformen finansieras av privata donationer från Sana,
          Thomas von Koch, Sven Hagströmer, Erik och Staffan Salén samt
          Carl-Henric Svanberg. De initiala bidragen beräknas täcka våra
          kostnader under det första året. Vår verksamhet är helt
          icke-kommersiell.
        </p>
      </section>
      <section>
        <h2>Om Sana</h2>
        <p>
          Sana är ett svenskt AI-bolag som utvecklar produkter för att förbättra
          hur människor och organisationer får tillgång till och använder
          kunskap med hjälp av AI. Företagets produkter används av ledande
          organisationer som Merck, Hinge Health, Electrolux och Svea Solar.
          Sana stöds av världsledande investerare som NEA, Menlo Ventures och
          EQT Ventures.
        </p>
      </section>
      <section>
        <h2>Styrelse</h2>
        <p>
          Svenska AI-reformens styrelse består av personer med bakgrund inom
          forskning, teknik, folkbildning och samhällsutveckling. Tillsammans
          leder de arbetet med att göra AI mer tillgängligt i hela samhället.
        </p>
        <h3>Styrelseledamöter</h3>
        <ul>
          <li>
            <h4>Olof Hernell</h4>
            <p>
              Digitaliseringschef på Stegra. Tidigare på Google, EQT och ledamot
              i regeringens AI-kommission.
            </p>
          </li>
          <li>
            <h4>Nicklas Berild Lundblad</h4>
            <p>
              Författare, forskare och policyexpert. Tidigare på Google,
              DeepMind och ledamot i regeringens AI-kommission.
            </p>
          </li>
          <li>
            <h4>Emma Frans</h4>
            <p>
              Forskare, folkbildare och vetenskapskommunikatör. Två gånger
              utsedd till Årets Folkbildare.
            </p>
          </li>
          <li>
            <h4>Joel Hellermark</h4>
            <p>Grundare och VD för Sana.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
