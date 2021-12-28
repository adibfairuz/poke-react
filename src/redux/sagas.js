import { all } from 'redux-saga/effects';
import pokemonSaga from './modules/pokemon/saga';

export default function* rootSagas() {
  yield all([
    pokemonSaga()
  ]);
}
