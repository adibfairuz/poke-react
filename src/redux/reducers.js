import {combineReducers} from 'redux';
import pokemonReducer from './modules/pokemon/reducer';

const rootReducers = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducers;
