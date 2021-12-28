import * as actions from './constants';

const initialState = {
    pokemons: {
        data: [],
        loading: false,
        error: false,
        status: 1,
    },
    pokemon: {
        data: {},
        loading: false,
        error: false,
        status: 1,
    },
    favorites: {
        data: [],
        loading: false,
        error: false,
        status: 1,
    },
    addOrRemoveFavorite: {
        data: {},
        loading: false,
        error: false,
        status: 1,
    }
}

export default function pokemonReducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case actions.GET_POKEMONS:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    loading: true,
                    error: false,
                    status: 1,
                }
            }
        case actions.GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemons: {
                    data: payload.data,
                    loading: false,
                    error: false,
                    status: payload.status
                }
            }
        
        case actions.GET_POKEMONS_ERROR:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    loading: false,
                    error: true,
                    status: payload.status
                }
            }

        case actions.GET_POKEMON:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    loading: true,
                    error: false,
                    status: 1,
                }
            }
        case actions.GET_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: {
                    data: payload.data,
                    loading: false,
                    error: false,
                    status: payload.status
                }
            }
        
        case actions.GET_POKEMON_ERROR:
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    loading: false,
                    error: true,
                    status: payload.status
                }
            }

        case actions.ADD_OR_REMOVE_FAVORITE:
            return {
                ...state,
                addOrRemoveFavorite: {
                    ...state.addOrRemoveFavorite,
                    loading: true,
                    error: false,
                    status: 1,
                }
            }
        case actions.ADD_OR_REMOVE_FAVORITE_SUCCESS:
            return {
                ...state,
                addOrRemoveFavorite: {
                    data: payload.data,
                    loading: false,
                    error: false,
                    status: payload.status
                }
            }
        
        case actions.ADD_OR_REMOVE_FAVORITE_ERROR:
            return {
                ...state,
                addOrRemoveFavorite: {
                    ...state.addOrRemoveFavorite,
                    loading: false,
                    error: true,
                    status: payload.status
                }
            }

        case actions.GET_FAVORITES:
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    loading: true,
                    error: false,
                    status: 1,
                }
            }
        case actions.GET_FAVORITES_SUCCESS:
            return {
                ...state,
                favorites: {
                    data: payload.data,
                    loading: false,
                    error: false,
                    status: payload.status
                }
            }
        
        case actions.GET_FAVORITES_ERROR:
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    loading: false,
                    error: true,
                    status: payload.status
                }
            }
            

        default:
            return state;
    }
}