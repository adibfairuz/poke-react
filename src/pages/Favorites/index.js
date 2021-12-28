import React from 'react'
import Header from '../../components/Header'
import Page from '../../components/Page'
import FavoriteList from '../../containers/FavoriteList'
import Menu from '../../containers/Menu'

function FavoritesPage() {
    return (
        <Page>
            <Header>FAVORITE</Header>
            <FavoriteList />
            <Menu />
        </Page>
    )
}

export default FavoritesPage
