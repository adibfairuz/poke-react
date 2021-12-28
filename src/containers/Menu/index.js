import React from 'react'
import BottomTabs, { Tab } from '../../components/BottomTabs'
import { GoHome } from 'react-icons/go'
import { HiOutlineHeart } from 'react-icons/hi'
import routes from '../../config/routes'
import { Link } from 'react-router-dom'
import { pikachuSmallImage, pokemonBallSmallImage } from '../../assets/images'

function Menu() {
    return (
        <BottomTabs>
            <Link to={routes.HOME()}>
                <Tab active={window.location.pathname === routes.HOME() ? true : false}>
                    <img src={pikachuSmallImage} style={{width: 22, height: 22}} />
                    <div className='fs-08 pt-1'>Home</div>
                </Tab>
            </Link>
            <Link to={routes.FAVORITES()}>
                <Tab active={window.location.pathname === routes.FAVORITES() ? true : false}>
                    <img src={pokemonBallSmallImage} style={{width: 22, height: 22}} />
                    <div className='fs-08 pt-1'>Fav</div>
                </Tab>
            </Link>
        </BottomTabs>
    )
}

export default Menu
