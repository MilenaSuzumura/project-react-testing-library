import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Pokemon } from '../components';
import pokemons from '../data';

describe('Teste o componente Pokemon', () => {
  test('Testa se o nome pokémon está sendo mostrado na tela;', () => {
    render(
      <MemoryRouter>
        <Pokemon isFavorite={ false } pokemon={ pokemons[0] } />
      </MemoryRouter>,
    );
    const pokemonName = screen.getByText(pokemons[0].name);
    expect(pokemonName).toBeInTheDocument();
  });

  test('Testa se o tipo do pokémon está sendo mostrado na tela', () => {
    render(
      <MemoryRouter>
        <Pokemon isFavorite={ false } pokemon={ pokemons[0] } />
      </MemoryRouter>,
    );

    const pokemonType = screen.getByText(pokemons[0].type);
    expect(pokemonType).toBeInTheDocument();
  });

  test('Testa se o peso do pokémon está sendo mostrado na tela', () => {
    render(
      <MemoryRouter>
        <Pokemon isFavorite={ false } pokemon={ pokemons[0] } />
      </MemoryRouter>,
    );
    const { measurementUnit, value } = pokemons[0].averageWeight;
    const pokemonAve = screen.getByText(`Average weight: ${value} ${measurementUnit}`);
    expect(pokemonAve).toBeInTheDocument();
  });

  test('Testa se a imagem do pokémon está sendo exibida', () => {
    render(
      <MemoryRouter>
        <Pokemon isFavorite={ false } pokemon={ pokemons[0] } />
      </MemoryRouter>,
    );
    const pokemonImg = screen.getByAltText(`${pokemons[0].name} sprite`);
    expect(pokemonImg).toBeInTheDocument();
    expect(pokemonImg).toHaveAttribute('src', `${pokemons[0].image}`);
  });

  test('Teste se o card do pokémon contém um link de navegação próprio', () => {
    render(
      <MemoryRouter>
        <Pokemon isFavorite={ false } pokemon={ pokemons[0] } />
      </MemoryRouter>,
    );
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    expect(linkPokemon).toBeInTheDocument();
    expect(linkPokemon).toHaveAttribute('href', `/pokemons/${pokemons[0].id}`);
  });
  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    const favoriteTrue = true;
    render(
      <MemoryRouter>
        <Pokemon isFavorite={ favoriteTrue } pokemon={ pokemons[0] } />
      </MemoryRouter>,
    );
    const pokemonFav = screen.getByAltText(`${pokemons[0].name} is marked as favorite`);
    expect(pokemonFav).toBeInTheDocument();
    expect(pokemonFav).toHaveAttribute('src', '/star-icon.svg');
  });
});
