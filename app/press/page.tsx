import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press',
};

export default function Press() {
  return (
    <div>
      <h1>Press</h1>
      <p>
        Här hittar du pressmeddelanden, pressbilder och kontaktuppgifter om
        Svenska AI-reformen.
      </p>
      <p>Välkommen att höra av dig!</p>
      <section>
        <h2>Kontakt</h2>
        <p>Presskontakt:</p>
        <p>E-post: press@aireformen.se</p>
      </section>
      <section>
        <h2>Pressmeddelanden</h2>
        <ul>
          <li>
            Ny stiftelse vill demokratisera tillgången till AI i Sverige –
            lanseras 7 maj (Publicerat 7 maj 2025)
          </li>
        </ul>
      </section>
    </div>
  );
}
