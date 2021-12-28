import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from './constants'
import * as services from './service'

export function* getPokemons(action) {
    try {
        const data = yield call(services.getPokemons, action.payload.params)
        yield put({
            type: actions.GET_POKEMONS_SUCCESS,
            payload: {
                ...action.payload,
                data: data.data.data,
                status: data.data.status
            }
        })
    } catch (error) {
        yield put({
            type: actions.GET_POKEMONS_ERROR,
            payload: {
                ...action.payload,
                status: error.response.status
            }
        })
    }
}

export function* getPokemon(action) {
    try {
        const data = yield call(services.getPokemon, action.payload.params)
        yield put({
            type: actions.GET_POKEMON_SUCCESS,
            payload: {
                ...action.payload,
                data: data.data.data,
                status: data.data.status
            }
        })
    } catch (error) {
        yield put({
            type: actions.GET_POKEMON_ERROR,
            payload: {
                ...action.payload,
                status: error?.response?.status
            }
        })
    }
}

export function* addOrRemoveFavorite(action) {
    try {
        const data = yield call(services.addOrRemoveFavorite, action.payload.params)
        yield put({
            type: actions.ADD_OR_REMOVE_FAVORITE_SUCCESS,
            payload: {
                ...action.payload,
                data: data.data.data,
                status: data.data.status
            }
        })
    } catch (error) {
        yield put({
            type: actions.ADD_OR_REMOVE_FAVORITE_ERROR,
            payload: {
                ...action.payload,
                status: error.response.status
            }
        })
    }
}

export function* getFavorites(action) {
    try {
        const data = yield call(services.getFavorites, action.payload.params)
        yield put({
            type: actions.GET_FAVORITES_SUCCESS,
            payload: {
                ...action.payload,
                data: data.data.data,
                status: data.data.status
            }
        })
    } catch (error) {
        yield put({
            type: actions.GET_FAVORITES_ERROR,
            payload: {
                ...action.payload,
                status: error.response.status
            }
        })
    }
}

export default function* pokemon() {
    yield takeEvery(actions.GET_POKEMONS, getPokemons)
    yield takeEvery(actions.GET_POKEMON, getPokemon)
    yield takeLatest(actions.ADD_OR_REMOVE_FAVORITE, addOrRemoveFavorite)
    yield takeEvery(actions.GET_FAVORITES, getFavorites)
}
