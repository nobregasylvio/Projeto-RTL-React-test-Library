import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import RenderWithRouter from './RenderWithRouter';

describe('', () => {
  test('A imagem do pokemon possui o "src" correto', () => {
    RenderWithRouter(<App />);
    const alt = /sprite/;
    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const img = screen.getByAltText(alt);

    expect(img).toHaveAttribute('src', url);
  });

  test('A imagem de favorito star possui o src /star-icon.svg', () => {
    RenderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favorite = screen.getByLabelText(/favoritado/i);
    userEvent.click(favorite);

    const alt = /is marked as favorite/i;
    const url = '/star-icon.svg';
    const img = screen.getByAltText(alt);

    expect(img).toHaveAttribute('src', url);
  });

  test('É exibido na tela um texto com o tipo do pokemon', () => {
    RenderWithRouter(<App />);

    const type = screen.getByTestId('pokemon-type');

    expect(type.textContent).toBe('Electric');
  });
});
