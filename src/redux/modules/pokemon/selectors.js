export const pokemonsSelector = (state) => {
    return state?.pokemon?.pokemons;
}

export const pokemonSelector = (state) => {
    return state?.pokemon?.pokemon;
}

export const favoritesSelector = (state) => {
    return state?.pokemon?.favorites;
}