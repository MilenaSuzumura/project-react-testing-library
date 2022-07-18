import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';

/* Referencias:
    https://testing-library.com/docs/vue-testing-library/cheatsheet/#search-types
    https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
*/
describe('Teste o About', () => {
  test('Teste se a página contém um heading h2 com o texto "About Pokédex"', () => {
    render(<About />);
    const tituloAbout = screen.getByText('About Pokédex');
    expect(tituloAbout).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex: "https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"', () => {
    render(<About />);
    const about = screen.getByAltText('Pokédex');
    expect(about).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
