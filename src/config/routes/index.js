const routes = {
    HOME: () => `/`,
    DETAILS: (name = '') => `/${name}`,
    FAVORITES: () => `/favorites`
}

export default routes;