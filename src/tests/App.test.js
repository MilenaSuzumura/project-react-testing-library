import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
  () => {
    test('Testa se o primeiro link possui o texto "Home"', async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const linkHome = screen.getByRole('link', { name: /Home/i });
      expect(linkHome).toBeInTheDocument();
    });

    test('Testa se o segundo link deve possuir o texto "About"', () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const about = screen.getByRole('link', { name: /About/i });
      expect(about).toBeDefined();
    });

    test('Testa se o terceiro link deve possuir o texto "Favorite Pokémons"', () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const favoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
      expect(favoritePokemons).toBeDefined();
    });
  });
