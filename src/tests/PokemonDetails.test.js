import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import pokemons from '../data';
import App from '../App';

describe('Testa o componente PokemonDetails', () => {
  test('Teste se tem o "<nome do pokémon> Details" na tela', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkPokemon);
    const namePokemon = screen.getByText(`${pokemons[0].name} Details`);
    expect(namePokemon).toBeInTheDocument();
  });
  test('A seção de detalhes deve conter um heading h2 com o texto "Summary"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkPokemon);
    const textSummary = screen.getByText('Summary');
    expect(textSummary).toBeInTheDocument();
    const textResumo = screen.getByText(`${pokemons[0].summary}`);
    expect(textResumo).toBeInTheDocument();
  });

  test('Deverá existir o texto "Game Locations of <name>"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkPokemon);
    const locationTitle = screen.getByText(`Game Locations of ${pokemons[0].name}`);
    expect(locationTitle).toBeInTheDocument();
  });

  test('Deve conter uma imagem da localização do Pokémon', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkPokemon);
    const locationImg = screen.getAllByAltText(`${pokemons[0].name} location`);
    for (let i = 0; i < locationImg.length; i += 1) {
      expect(locationImg[i]).toBeInTheDocument();
      expect(locationImg[i]).toHaveAttribute('src', `${pokemons[0].foundAt[i].map}`);
    }
  });

  test('Deve conter uma label com o texto "Pokémon favoritado?"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkPokemon);
    const labelText = screen.getByLabelText('Pokémon favoritado?');
    expect(labelText).toBeInTheDocument();
  });

  test('Devem adicionar e remover o pokémon da lista de favoritos;', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(home);
    const linkPokemon = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkPokemon);
    const labelText = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(labelText);
    const pokemonFav = screen.getByAltText(`${pokemons[0].name} is marked as favorite`);
    expect(pokemonFav).toBeInTheDocument();
    userEvent.click(labelText);
    expect(pokemonFav).not.toBeInTheDocument();
  });
});
