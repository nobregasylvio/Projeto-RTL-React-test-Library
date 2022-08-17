import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Teste o componente "<PokemonDetails.js />"', () => {
  test('É exibido na tela um h2 com o texto "<name> Details"', () => {
    RenderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const title = screen.getByRole('heading', { name: /Details/i, level: 2 });

    expect(title).toBeInTheDocument();
  });

  test('É exibido na tela um h2 com o texto "Summary"', () => {
    RenderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const title = screen.getByRole('heading', { name: /summary/i, level: 2 });

    expect(title).toBeInTheDocument();
  });

  test('É exibido na tela um texto contendo "<summary>"', () => {
    RenderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const text = /This intelligent Pokémon roasts hard berries with electricity/i;
    const summary = screen.getByText(text);

    expect(summary).toBeInTheDocument();
  });

  test('É exibido na tela um h2 com o texto "Game Locations of <name>"', () => {
    RenderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const title = screen.getByRole('heading', { name: /game locations of/i, level: 2 });

    expect(title).toBeInTheDocument();
  });

  test('São exibidas na tela imagens de localização com o "src" correto', () => {
    RenderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const img1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const img2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

    const locations = screen.getAllByAltText(/location/i);

    expect(locations[0]).toHaveAttribute('src', img1);
    expect(locations[1]).toHaveAttribute('src', img2);
  });

  test('É exibido na tela uma label com o texto "Pokémon favoritado?"', () => {
    RenderWithRouter(<App />);

    const link = screen.getByRole('link', { name: /more details/i });
    userEvent.click(link);

    const favorite = screen.getByLabelText(/pokémon favoritado?/i);

    expect(favorite).toBeInTheDocument();
  });
});
