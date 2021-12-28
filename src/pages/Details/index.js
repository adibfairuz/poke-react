import React from 'react'
import Header from '../../components/Header'
import Page from '../../components/Page'
import Details from '../../containers/Details'
import Menu from '../../containers/Menu'

function DetailsPage() {
    return (
        <Page>
            <Details />
            <Menu />
        </Page>
    )
}

export default DetailsPage
