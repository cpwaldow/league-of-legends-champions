import { ChampionListType } from '../../types';
import './championInfo.css';

type PropsType = {
  info: ChampionListType;
};

const ChampionInfo = ({ info }: PropsType) => {
  const handleImg = (championName: string) =>
    `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;

  return (
    <div className='championInfo__container' data-testid='champion'>
      <img src={handleImg(info.id)} alt={info.name} />
      <h2>{info.name}</h2>
      <p>{info.title}</p>
    </div>
  );
};

export default ChampionInfo;
