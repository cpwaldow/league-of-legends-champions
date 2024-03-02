import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ChampionList from '../pages/ChampionList';
import { mockFetchChampionsList } from './mock/mockFetchChampionsList';
import { mockStorageChampionsList } from './mock/mockStorageChampionsList';
import { setStorage } from '../services/storage';
import { BrowserRouter } from 'react-router-dom';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('Verifica se o H1 é renderizado na tela', () => {
    render(<ChampionList />);
    const h1Element = screen.getByRole('heading', {
      name: /Welcome to Summoners Rift/i,
    });
    expect(h1Element).toBeInTheDocument();
  });

  it('Testando fetch com o mock', async () => {
    const MOCK_RESPONSE = {
      json: async () => mockFetchChampionsList,
    } as Response;

    const mockFetch = vi
      .spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_RESPONSE);

    render(<ChampionList />, { wrapper: BrowserRouter });
    const renderAatrox = await screen.findByText('Aatrox');
    const renderKarthus = await screen.findByText('Karthus');

    expect(renderAatrox).toBeInTheDocument();
    expect(renderKarthus).toBeInTheDocument();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json',
    );
  });

  it('Testando renderização direto do storage', () => {
    setStorage(mockStorageChampionsList);
    render(<ChampionList />, { wrapper: BrowserRouter });
    const renderAatrox = screen.getByText('Aatrox');
    const renderKarthus = screen.getByText('Karthus');

    expect(renderAatrox).toBeInTheDocument();
    expect(renderKarthus).toBeInTheDocument();
  });
});
