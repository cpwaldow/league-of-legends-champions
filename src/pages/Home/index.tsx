import { welcomeLanguages } from '../../utils/welcomeLanguages';
import './home.css';
import { Analytics } from "@vercel/analytics/next"

const Home = () => {
  return (
    <>
      <Analytics />
      <section className='home__container'>
        {welcomeLanguages.map((lang) => (
          <p key={lang} className='home--welcome__text'>
            {lang}
          </p>
        ))}
      </section>
    </>
  );
};

export default Home;
