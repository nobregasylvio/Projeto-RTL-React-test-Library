import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';

describe('Teste o componente <About.js />.', () => {
  test('É exibido na tela um h2 com texto "About Pokédex"', () => {
    render(<About />);
    const h2 = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });

    expect(h2).toBeInTheDocument();
  });

  test('O atributo src da imagem é "https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"', () => {
    render(<About />);
    const image = screen.getByAltText('Pokédex');
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(image).toHaveAttribute('src', url);
  });
});
