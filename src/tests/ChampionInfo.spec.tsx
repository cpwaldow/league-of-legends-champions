import { render, screen } from '@testing-library/react';
import { mockStorageChampionsList } from './mock/mockStorageChampionsList';
import ChampionInfo from '../components/ChampionInfo';

describe('ChampionInfo componente', () => {
  it('Renderiza nome, titulo e imagem do campeão', () => {
    render(
      mockStorageChampionsList.map((item) => (
        <ChampionInfo key={item.name} info={item} />
      )),
    );

    const ivernElImg = screen.getByAltText(/Ivern/i);
    const ivernName = screen.getByText(/Ivern/i);
    const ivernTitle = screen.getByText(/o Pai do Verde/i);

    expect(screen.getAllByTestId('champion')).toHaveLength(167);
    expect(ivernElImg).toBeInTheDocument();
    expect(ivernElImg).toHaveAttribute(
      'src',
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg',
    );
    expect(ivernName).toBeInTheDocument();
    expect(ivernTitle).toBeInTheDocument();
  });
});
