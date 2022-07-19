import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import pokemons from '../data';
import { Pokedex } from '../pages';

describe('Teste o componente Pokedex', () => {
  const idButton = 'next-pokemon';

  test('Teste se a página contém o texto "Encountered pokémons"', () => {
    render(
      <MemoryRouter>
        <Pokedex isPokemonFavoriteById={ pokemons[0] } pokemons={ pokemons } />
      </MemoryRouter>,
    );
    const tituloPokedex = screen.getByText('Encountered pokémons');
    expect(tituloPokedex).toBeInTheDocument();
  });

  test('Teste se existe o botão "Próximo pokémon"', () => {
    render(
      <MemoryRouter>
        <Pokedex isPokemonFavoriteById={ pokemons[0] } pokemons={ pokemons } />
      </MemoryRouter>,
    );
    const buttonProximoPokemon = screen.getByTestId(idButton);
    expect(buttonProximoPokemon).toBeInTheDocument();
  });

  test(`Teste se é exibido o próximo pokémon da lista quando o botão
  "Próximo pokémon" é clicado`, () => {
    render(
      <MemoryRouter>
        <Pokedex isPokemonFavoriteById={ pokemons[0] } pokemons={ pokemons } />
      </MemoryRouter>,
    );

    const pikachu = screen.getByText(pokemons[0].name);
    expect(pikachu).toBeInTheDocument();

    const buttonProximoPokemon = screen.getByTestId(idButton);
    userEvent.click(buttonProximoPokemon);
    const charmander = screen.getByText(pokemons[1].name);
    expect(charmander).toBeInTheDocument();
  });

  test(`O primeiro pokémon da lista deve ser mostrado ao
  clicar no botão, se estiver no último pokémon da lista`, () => {
    render(
      <MemoryRouter>
        <Pokedex isPokemonFavoriteById={ pokemons[0] } pokemons={ pokemons } />
      </MemoryRouter>,
    );
    const quantidadeClickar = 8;
    const buttonProximoPokemon = screen.getByTestId(idButton);

    for (let i = 0; i < quantidadeClickar; i += 1) userEvent.click(buttonProximoPokemon);

    const ultimoPokemon = screen.getByText(pokemons[8].name);
    expect(ultimoPokemon).toBeInTheDocument();

    userEvent.click(buttonProximoPokemon);

    const primeiroPokemon = screen.getByText(pokemons[0].name);
    expect(primeiroPokemon).toBeInTheDocument();
  });

  test(`Teste se a Pokédex tem os botões de filtragem para
  cada tipo de pokémon, sem repetição`, () => {
    render(
      <MemoryRouter>
        <Pokedex isPokemonFavoriteById={ pokemons[0] } pokemons={ pokemons } />
      </MemoryRouter>,
    );
    const buttonAll = screen.getAllByTestId('pokemon-type-button');
    expect(buttonAll[0]).toBeInTheDocument();
    expect(buttonAll[1]).toBeInTheDocument();
    expect(buttonAll[2]).toBeInTheDocument();
    expect(buttonAll[3]).toBeInTheDocument();
    expect(buttonAll[4]).toBeInTheDocument();
    expect(buttonAll[5]).toBeInTheDocument();
    expect(buttonAll[6]).toBeInTheDocument();
  });

  test('Testa se o botão All precisa está visível', () => {
    render(
      <MemoryRouter>
        <Pokedex isPokemonFavoriteById={ pokemons[0] } pokemons={ pokemons } />
      </MemoryRouter>,
    );
    const buttonAll = screen.getByRole('button', { name: /All/i });
    expect(buttonAll).toBeInTheDocument();
  });
});
