import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import RenderWithRouter from './RenderWithRouter';

describe('Teste o componente <Pokedex.js />', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    RenderWithRouter(<App />);

    const pokemonTypes = [
      'Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon',
    ];

    pokemonTypes.forEach((type) => {
      const button = screen.getByRole('button', { name: type });
      expect(button).toBeInTheDocument();
    });
  });

  test('Os botões de filtragem possuem o "data-testid=pokemon-type-button"', () => {
    RenderWithRouter(<App />);

    const buttonTypes = screen.getAllByTestId('pokemon-type-button');

    buttonTypes.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test('É possível clicar no botão de filtragem All', () => {
    RenderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /All/ });

    userEvent.click(button);
  });
});
