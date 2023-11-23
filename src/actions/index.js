export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

// export const heroesFiltredFetched = (heroes) => {
//     return {
//         type: 'HEROES_FILTRED_FETCHED',
//         payload: {heroes}
//     }
// }

export const heroesFiltred = (heroes) => {
    return {
        type: 'HEROES_FILTRED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}