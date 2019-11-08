import { createSelector } from 'reselect';
import { CHARACTERS } from './constants';

export const selectorForCharactersData = () => state => state[CHARACTERS];

export const selectCharactersData = () =>
  createSelector(
    selectorForCharactersData(),
    state => state
  );
