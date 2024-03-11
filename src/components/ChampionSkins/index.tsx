import './championSkins.css';
import Carousel from './Carousel';

type ChampionSkinsType = {
  skins: {
    chromas: boolean;
    id: string;
    name: string;
    num: number;
  }[];
  id: string;
};

const ChampionSkins = ({ skins, id }: ChampionSkinsType) => {
  console.log(skins);
  console.log(skins.slice(1));

  return (
    <div>
      <h3>Skins</h3>
      <Carousel images={skins.slice(1)} id={id} />
    </div>
  );
};

export default ChampionSkins;
