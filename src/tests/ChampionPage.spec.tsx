import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { mockFetchChampionPage } from './mock/mockFetchChampionPage';
import ChampionPage from '../pages/ChampionPage';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Página ChampionPage testes', () => {
  it('Ao entrar na página sem informações, deve aparecer o texto "Carregando..."', () => {
    render(<ChampionPage />);
    const loadingText = screen.getByText(/Carregando.../i);
    expect(loadingText).toBeInTheDocument();
  });

  it('Renderizando informações do campeão', async () => {
    const MOCK_RESPONSE = {
      json: async () => mockFetchChampionPage,
    } as Response;

    const mockFetch = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_RESPONSE);

    renderWithRouter(<App />, { route: '/champion-list/Aatrox' });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion/Aatrox.json',
    );
    const championName = await screen.findByText(/Aatrox - a Espada Darkin/i);
    const championRole = await screen.findByText(/Fighter - Tank/i);
    const championAllyTips = await screen.findByText(/Aatrox aliado/i);
    const championEnemyTips = await screen.findByText(/Aatrox inimigo/i);
    expect(championName).toBeInTheDocument();
    expect(championRole).toBeInTheDocument();
    expect(championAllyTips).toBeInTheDocument();
    expect(championEnemyTips).toBeInTheDocument();
  });

  it('Renderizando botões de skins', async () => {
    const MOCK_RESPONSE = {
      json: async () => mockFetchChampionPage,
    } as Response;

    const mockFetch = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_RESPONSE);
    renderWithRouter(<App />, { route: '/champion-list/Aatrox' });
    const nextSkinBtn = await screen.findByTestId('next-skin-btn');
    const previousSkinBtn = await screen.findByTestId('previous-skin-btn');

    await userEvent.click(nextSkinBtn);
    await userEvent.click(previousSkinBtn);

    expect(nextSkinBtn).toBeInTheDocument();
    expect(previousSkinBtn).toBeInTheDocument();

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});
