import { render, screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('É exibido na tela a mensagem "No favorite pokemon found"', () => {});
  render(<FavoritePokemons />);

  const msg = screen.getByText('No favorite pokemon found');

  expect(msg).toBeInTheDocument();
});
