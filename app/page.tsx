import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section>
        <p>
          AI förändrar samhället snabbt. Redan i dag överträffar AI-modellerna
          den mänskliga intelligensen inom en lång rad områden och utvecklingen
          visar inga tecken på att avta. Men tillgången till tekniken är ojämnt
          fördelad, och Sverige faller efter i globala mätningar av AI-mognad.
          Svenska AI-reformen är en ideell stiftelse som vill ändra på det.
        </p>
        <p>
          Genom att erbjuda kraftfulla AI-verktyg kostnadsfritt till alla inom
          offentlig sektor, civilsamhälle och lärosäten vill vi bredda kunskapen
          om AI – för ett mer inkluderande, innovativt och rättvist Sverige. Vår
          ambition är att erbjuda 2,3 miljoner svenskar fri tillgång till
          AI-tjänster. Det gör vi tillsammans med AI-bolaget Sana som
          tillhandahåller sin tjänst kostnadsfritt och med hjälp av privata
          donatorer som bekostar användningen.{' '}
        </p>
      </section>
      <section>
        <div>
          <h2>Registering</h2>
          <p>
            Är du offentliganställd, student eller verksam inom civilsamhället?
            Ansök om tillgång till AI.
          </p>
          <Link href="/ansok">Ansök här</Link>
        </div>
        <div>
          <h2>Om AI-reformen</h2>
          <p>Läs mer om stiftelsen, våra grundare och hur vi finansieras.</p>
          <Link href="/om-oss">Läs mer</Link>
        </div>
        <div>
          <h2>För journalister</h2>
          <p>Pressmeddelanden, kontaktuppgifter och mer om AI-reformen</p>
          <Link href="/press">Pressrum</Link>
        </div>
      </section>
    </>
  );
}
