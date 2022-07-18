import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';

/* Referencias:
    https://testing-library.com/docs/vue-testing-library/cheatsheet/#search-types
    https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src
*/
describe('Teste o NotFound', () => {
  test('Teste se a página contém um heading h2 com o texto "Page requested not found 😭"',
    () => {
      render(<NotFound />);
      const text = screen.getAllByRole('heading', { name: /Page requested not found/i });
      expect(text).toBeDefined();
    });
  test('Teste se a página mostra a imagem "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    render(<NotFound />);
    const texto = 'Pikachu crying because the page requested was not found';
    const about = screen.getByAltText(texto);
    expect(about).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
