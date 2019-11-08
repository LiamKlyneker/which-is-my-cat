import { peopleApi } from '#services/api';
import {
  CHARACTERS_GET_LIST,
  CHARACTERS_GET_CHARACTER_DETAIL,
  CHARACTERS_GET_MORE_CHARACTERS,
} from './constants';

export const getCharactersList = () => ({
  type: CHARACTERS_GET_LIST,
  payload: {
    request: {
      url: peopleApi,
    },
  },
});

export const getCharacterDetail = ({ characterId }) => ({
  type: CHARACTERS_GET_CHARACTER_DETAIL,
  payload: {
    request: {
      url: `${peopleApi}${characterId}/`,
    },
  },
});

export const getMoreCharactersToTheList = ({ urlNext }) => ({
  type: CHARACTERS_GET_MORE_CHARACTERS,
  payload: {
    request: {
      url: urlNext,
    },
  },
});
