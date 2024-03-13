import './championSkills.css';

type PropsType = {
  skills: {
    passive: any;
    spells: {
      name: string;
      cooldown: number[];
      cost: number[];
      range: number[];
      id: string;
      image: any;
      [key: string]: string | number | number[];
    }[];
    resourse: string;
    name: string;
  };
};

const ChampionSkills = ({ skills }: PropsType) => {
  const abilityKey = ['Q', 'W', 'E', 'R'];
  const PASSIVE_URL_IMG = `https://ddragon.leagueoflegends.com/cdn/14.4.1/img/passive/${skills.passive.image.full}`;

  return (
    <>
      <h3>Habilidades</h3>
      <div className='championsSkill__spells'>
        <img src={PASSIVE_URL_IMG} alt={skills.passive.name} />
        <div>
          <p>Passiva - {skills.passive.name}</p>
          <p>{skills.passive.description}</p>
        </div>
      </div>
      <div>
        {skills.spells.map((spell, index) => (
          <section key={spell.name} className='championsSkill__spells'>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/${spell.image.full}`}
              alt={spell.name}
            />
            <div>
              <h4>
                {abilityKey[index]} - {spell.name}
              </h4>
              <p>{spell.description}</p>
              <p>
                Tempo de recarga:{' '}
                {spell.cooldown.map((item) => `${item}s`).join(' - ')}
              </p>
              <p>
                Custo{skills.resourse && ` de ${skills.resourse}`}:{' '}
                {spell.cost.join(' - ')}
              </p>
              <p>Range: {spell.range.join(' - ')}</p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ChampionSkills;
