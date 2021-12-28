import axios from "axios";
import { API } from "../../../config/urls";

const POKEMON_API = `${API}/pokemon`

export const getPokemons = (params) =>
    axios.get(`${POKEMON_API}`, {params})

export const getPokemon = (params) =>
    axios.get(`${POKEMON_API}/${params.name}`)

export const addOrRemoveFavorite = (params) =>
    axios.post(`${POKEMON_API}/favorite/${params.id}`)

export const getFavorites = (params) =>
    axios.get(`${POKEMON_API}/favorite`, {params})