// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="lg:flex items-start">
      <div className="px-5 pt-8 pb-10 lg:px-8 lg:pb-12 lg:pt-14 lg:w-1/2">
        <h1 className="text-4xl font-medium lg:text-4xl xl:text-6xl mb-10 lg:mb-16">
          Sverige ska bli världsledande inom tillämpad AI. Och då måste alla
          med. Nu.
        </h1>

{/* Short Om oss teaser (white background) */}
<section className="py-10 lg:py-16 bg-white">
  <div className="max-w-5xl mx-auto px-5 lg:px-0">

    <p className="text-xl lg:text-3xl mb-6">
      Svenska AI-reformen arbetar för att göra tillämpad AI tillgänglig för
      alla i Sverige – i offentlig sektor, utbildning och civilsamhälle.
    </p>

    <Link
      href="/om-oss"
      className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-700 text-lg"
    >
      Läs mer
    </Link>
  </div>
</section>

     
        {/* Partner / program */}
        <Link
          className="w-full group flex items-center gap-3 justify-between bg-gray hover:bg-yellow rounded-2xl px-5 py-4 mb-3 md:px-8 md:py-5"
          href="/partners"
        >
          <div>
            <h2 className="text-xl lg:text-2xl">
              Registrering för Sana Agents
            </h2>
            <p className="text-md opacity-45">
              Är du offentliganställd, student eller verksam inom
              civilsamhället?
            </p>
          </div>
          <span className="block bg-black-5 text-black group-hover:bg-black group-hover:text-white p-3 rounded-full text-center text-nowrap w-24">
            Ansök här
          </span>
        </Link>
      </div>





      <Image
        className="w-full h-auto lg:w-1/2"
        src="/image01.png"
        alt="AI-Reformen"
        width={720}
        height={720}
      />
    </section>
  );
}
