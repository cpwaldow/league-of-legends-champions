import { welcomeLanguages } from '../../utils/welcomeLanguages';
import './home.css';
import { Analytics } from "@vercel/analytics/react"

const Home = () => {
  return (
    <>
      <section className='home__container'>
        {welcomeLanguages.map((lang) => (
          <p key={lang} className='home--welcome__text'>
            {lang}
          </p>
        ))}
      </section>
      <Analytics />
    </>
  );
};

export default Home;
