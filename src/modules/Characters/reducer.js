import { success } from '#modules/utils';
import {
  CHARACTERS_GET_LIST,
  CHARACTERS_GET_CHARACTER_DETAIL,
  CHARACTERS_GET_MORE_CHARACTERS,
} from './constants';

const defaultState = {
  token: '',
  charactersList: {
    isFetching: true,
    isFetchingMore: false,
    meta: {},
    list: [],
  },
  characterDetail: {
    isFetching: true,
    info: {},
  },
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHARACTERS_GET_LIST:
      return {
        ...state,
        charactersList: {
          ...state.charactersList,
          isFetching: true,
        },
      };
    case success(CHARACTERS_GET_LIST):
      return {
        ...state,
        charactersList: {
          ...state.charactersList,
          isFetching: false,
          meta: {
            count: payload.data.count,
            next: payload.data.next,
            previous: payload.data.previous,
          },
          list: payload.data.results,
        },
      };

    case CHARACTERS_GET_MORE_CHARACTERS:
      return {
        ...state,
        charactersList: {
          ...state.charactersList,
          isFetchingMore: true,
        },
      };
    case success(CHARACTERS_GET_MORE_CHARACTERS):
      return {
        ...state,
        charactersList: {
          ...state.charactersList,
          isFetchingMore: false,
          meta: {
            ...state.charactersList.meta,
            next: payload.data.next,
            previous: payload.data.previous,
          },
          list: [...state.charactersList.list, ...payload.data.results],
        },
      };

    case CHARACTERS_GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: {
          ...state.characterDetail,
          isFetching: true,
        },
      };
    case success(CHARACTERS_GET_CHARACTER_DETAIL):
      return {
        ...state,
        characterDetail: {
          ...state.characterDetail,
          isFetching: false,
          info: payload.data,
        },
      };

    default:
      return state;
  }
};

export default reducer;
