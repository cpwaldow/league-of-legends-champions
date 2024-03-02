import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';
import { welcomeLanguages } from '../utils/welcomeLanguages';

describe('Componente App', () => {
  it('Teste no navBar', () => {
    render(<App />, { wrapper: BrowserRouter });
    const menuHomeElement = screen.getByRole('link', { name: /home/i });
    const menuChampionsElement = screen.getByRole('link', {
      name: /campeões/i,
    });

    expect(menuHomeElement).toBeInTheDocument();
    expect(menuChampionsElement).toBeInTheDocument();
  });

  it('Texto de bem-vindo em diversas linguas é renderizado', () => {
    render(<App />, { wrapper: BrowserRouter });
    welcomeLanguages.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
