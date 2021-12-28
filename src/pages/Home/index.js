import React from 'react'
import Header from '../../components/Header'
import Page from '../../components/Page'
import List from '../../containers/List'
import Menu from '../../containers/Menu'

function HomePage() {
    return (
        <Page>
            <Header>POKEMON</Header>
            <List />
            <Menu />
        </Page>
    )
}

export default HomePage
