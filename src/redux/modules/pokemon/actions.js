import * as actions from './constants';

export function getPokemons(payload) {
  return {
    type: actions.GET_POKEMONS,
    payload
  };
}

export function getPokemon(payload) {
  return {
    type: actions.GET_POKEMON,
    payload
  };
}

export function addOrRemoveFavorite(payload) {
  return {
    type: actions.ADD_OR_REMOVE_FAVORITE,
    payload
  };
}

export function getFavorites(payload) {
  return {
    type: actions.GET_FAVORITES,
    payload
  };
}