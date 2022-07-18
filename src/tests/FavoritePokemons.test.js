import { render, screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemons } from '../pages';

describe('Teste o FavoritePokemons', () => {
  test('É exibida a mensagem "No favorite pokemon found" se não tiver pokémons favoritos',
    () => {
      render(<FavoritePokemons />);
      const noFavorite = screen.getByText('No favorite pokemon found');
      expect(noFavorite).toBeInTheDocument();
    });
});
