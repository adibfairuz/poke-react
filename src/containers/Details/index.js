import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import DetailsLayout from '../../components/DetailsLayout'
import { addOrRemoveFavorite, getPokemon } from '../../redux/modules/pokemon/actions'
import { pokemonSelector } from '../../redux/modules/pokemon/selectors'
import Abilities from './Abilities'
import About from './About'
import Images from './Images'
import Stats from './Stats'
import Loading from '../../components/Loading'

const tabs = ['about', 'stats', 'abilities', 'images']

function Details() {
    const [selectedTab, setSelectedTab] = useState('about')
    const [data, setData] = useState({})
    const [isFavorited, setIsFavorited] = useState(false)
    const navigate = useNavigate()
    const { loading } = useSelector(pokemonSelector)
    const handleActive = (tab) => {
        setSelectedTab(tab)
    }
    const params = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemon({
            params: {
                name: params.name
            },
            callback: (data, error) => {
                if (!error) {
                    setData(data.data)
                    setIsFavorited(data.data.is_favorited)
                }
            }
        }))
    }, [])

    const handleFavorite = () => {
        setIsFavorited(!isFavorited)
        dispatch(addOrRemoveFavorite({
            params: {
                id: data.id
            },
            callback: (data, error) => {
                if (!error) {
                    setIsFavorited(data.data.is_favorited)
                }else{
                    setIsFavorited(!isFavorited)
                }
            }
        }))
    }

    return (
        <>
        {
            loading && !Object.keys(data).length
                ?
                <Loading />
                :
                <DetailsLayout data={data} handleBack={() => navigate(-1)} handleFavorite={handleFavorite} isFavorited={isFavorited}>
                    <div className='common-tabs'>
                        <div className='tabs'>
                            {
                                tabs.map(item => {
                                    return(
                                        <div key={item} onClick={() => handleActive(item)} key={item} className={`tab ${item === selectedTab ? 'active' : 'false'}`}>{item}</div>
                                    )
                                })
                            }
                        </div>
                        {
                            loading && !Object.keys(data).length
                                ?
                                <div>
                                    <Player
                                        autoplay
                                        loop
                                        src="https://assets8.lottiefiles.com/private_files/lf30_rBOODA.json"
                                        style={{ height: '260px', width: '260px', marginTop: '60px' }}
                                        />
                                    <div className='text-center font-weight-600'>LOADING....</div>
                                </div>
                                :
                                Object.keys(data).length
                                ?
                                <div className='component'>
                                    {
                                        selectedTab === 'about'
                                        ? <About data={data.about} />
                                        : selectedTab === 'stats'
                                        ? <Stats data={data.stats} color={data.bg_color} />
                                        : selectedTab === 'abilities'
                                        ? <Abilities data={data.abilities} />
                                        : selectedTab === 'images'
                                        ? <Images data={data.images} />
                                        : null
                                    }
                                </div>
                                : null
                        }
                    </div>
                </DetailsLayout>
        }
        </>
    )
}

export default Details
