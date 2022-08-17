import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import RenderWithRouter from './RenderWithRouter';

describe('Teste o componente "<App.js />" ', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    RenderWithRouter(<App />);
    const home = screen.getByText('Home');

    expect(home).toBeInTheDocument();
  });

  test('O segundo link deve possuir o texto About', () => {
    RenderWithRouter(<App />);
    const about = screen.getByText('About');

    expect(about).toBeInTheDocument();
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    RenderWithRouter(<App />);
    const favoritePokemons = screen.getByText('Favorite Pokémons');

    expect(favoritePokemons).toBeInTheDocument();
  });
});
