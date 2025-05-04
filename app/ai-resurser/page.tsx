import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-resurser',
};

export default function AIResources() {
  return (
    <div>
      <h1>AI-resurser</h1>
      <p>
        Det är vår övertygelse att det bästa sättet att lära sig är genom att
        göra. Men ibland kan man behöva en liten hjälp på traven. Därför har vi
        samlat några utmärkta resurser som hjälper dig att ta dina ai-kunskaper
        till nästa nivå. Alla resurser är förstås kostnadsfria.
      </p>
      <section>
        <h2>För offentlig sektor:</h2>
        <ul>
          <li>
            Myndigheten för digital förvaltning (Digg) har samlat information om
            AI och hur du och din verksamhet kan använda generativ AI på ett
            ansvarsfullt och säkert sätt.{' '}
            <a href="https://www.digg.se/ai">www.digg.se/ai</a>
          </li>
          <li>
            Digg har tillsammans med Imy också tagit fram riktlinjerna som
            vägleder offentliga aktörer så att de kan använda generativ AI på
            ett medvetet och ansvarsfullt sätt.{' '}
            <a href="https://www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai/om-riktlinjerna">
              www.digg.se/ai-for-offentlig-forvaltning/riktlinjer-for-generativ-ai/om-riktlinjerna
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Utbildningar - introducerande</h2>
        <ul>
          <li>
            Intro till Generativ AI från AI Sweden
            <a href="https://www.ai.se/sv/tillampning/kurser-och-kompetensutveckling/intro-till-generativ-ai">
              www.ai.se/sv/tillampning/kurser-och-kompetensutveckling/intro-till-generativ-ai
            </a>
          </li>
          <li>
            Starta din AI-resa, e-utbildning från AI Sweden
            <a href="https://www.ai.se/sv/tillampning/kurser-och-kompetensutveckling/starta-din-ai-resa-onlinekurs">
              www.ai.se/sv/tillampning/kurser-och-kompetensutveckling/starta-din-ai-resa-onlinekurs
            </a>
          </li>
          <li>
            Elements of AI, e-utbildning från Helsiniki University
            <a href="https://www.elementsofai.com/">www.elementsofai.com/</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Utbildningar - fördjupande</h2>
        <ul>
          <li>
            MIT - Open learning har tagit fram en rad olika AI-utbildningar.
            <a href="https://openlearning.mit.edu/news/explore-world-artificial-intelligence-online-courses-mit">
              openlearning.mit.edu/news/explore-world-artificial-intelligence-online-courses-mit/
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
