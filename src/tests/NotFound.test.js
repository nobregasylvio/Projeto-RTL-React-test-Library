import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />.', () => {
  test('É exibido na tela um h2 com o texto "Page requested not found"', () => {
    render(<NotFound />);
    const texto = /Page requested not found/;
    const h2 = screen.getByRole('heading', { level: 2, name: texto });

    expect(h2).toBeInTheDocument();
  });

  test('Existe uma imagem com o src "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    render(<NotFound />);
    const alt = 'Pikachu crying because the page requested was not found';
    const image = screen.getByAltText(alt);
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(image).toHaveAttribute('src', url);
  });
});
