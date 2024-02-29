import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';
import { mockFetchChampionsList } from './mock/mockFetchChampionsList';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());
  it('Verifica se o H1 é renderizado na tela', () => {
    render(<App />);
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

    render(<App />);
    const renderAatrox = await screen.findByText('Aatrox');
    const renderKarthus = await screen.findByText('Karthus');

    expect(renderAatrox).toBeInTheDocument();
    expect(renderKarthus).toBeInTheDocument();

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'https://ddragon.leagueoflegends.com/cdn/14.4.1/data/pt_BR/champion.json',
    );
  });
});
