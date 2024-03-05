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
      [key: string]: string | number | number[];
    }[];
    resourse: string;
    name: string;
  };
};

const ChampionSkills = ({ skills }: PropsType) => {
  const abilityKey = ['Q', 'W', 'E', 'R'];

  return (
    <>
      <h3>Habilidades</h3>
      <div className='championsSkill__spells'>
        <p>Passiva - {skills.passive.name}</p>
        <p>{skills.passive.description}</p>
      </div>
      <div>
        {skills.spells.map((spell, index) => (
          <section key={spell.name} className='championsSkill__spells'>
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
          </section>
        ))}
      </div>
    </>
  );
};

export default ChampionSkills;
