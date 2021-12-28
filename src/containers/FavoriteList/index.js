import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Cards/Card2'
import { addOrRemoveFavorite, getFavorites, getPokemons } from '../../redux/modules/pokemon/actions'
import { favoritesSelector, pokemonsSelector } from '../../redux/modules/pokemon/selectors'
import { debounce } from 'throttle-debounce'
import { pokemonBallImage } from '../../assets/images'
import { useNavigate } from 'react-router-dom'
import routes from '../../config/routes'
import Loading from '../../components/Loading'

function FavoriteList() {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [loadingScroll, setLoadingScroll] = useState(false)
    const { loading, status: resStatus } = useSelector(favoritesSelector)
    const [status, setStatus] = useState(resStatus)
    const loadMoreRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setStatus(resStatus)
    }, [resStatus])

    useEffect(() => {
        dispatch(getFavorites({
            params: {
                page,
            },
            callback: (data, error) => {
                if (!error) {
                    setPokemons([
                        ...pokemons,
                        ...data.data.results
                    ])
                    setCount(data.data.count)
                }
                setLoadingScroll(false)
            }
        }))
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', handleLoadMore)
        return () => {
            window.removeEventListener('scroll', handleLoadMore)
        }
    }, [pokemons, loadingScroll, count])

    const handleLoadMore = debounce(10, () => {
        let pageOffset = window.pageYOffset + window.innerHeight + 100,
            loadMoreOffset = loadMoreRef?.current?.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        if (pageOffset > loadMoreOffset) {
            if (pokemons.length && !loadingScroll && page * 10 <= count) {
                setLoadingScroll(true)
                setPage(page + 1)
            }
        }
    })

    const handleRemove = (id) => {
        const index = pokemons.findIndex(item => item.id === id);
        const oldPokemons = [...pokemons]
        const newPokemons = [...pokemons]
        newPokemons.splice(index, 1)
        setPokemons(newPokemons)
        if (!newPokemons.length) {
            setStatus(404)
            setCount(count - 1)
        }
        dispatch(addOrRemoveFavorite({
            params: {
                id
            },
            callback: (data, error) => {
                if (error) {
                    setPokemons(oldPokemons)
                }
            }
        }))
    }

    return (
        <Container>
            {
                status === 404
                    ? 
                    <Row className='d-flex justify-content-center mt-5'>
                        <img src={pokemonBallImage} style={{width: '260px', height: '260px'}} className='mb-4' />
                        <div className='text-center font-weight-600'>Pokemon tidak ada. Mari tangkap pokemon</div>
                    </Row>
                    :
                    <Row>
                        {
                            loading && !pokemons.length
                                ? 
                                <Loading />
                                :
                                pokemons.map(item => {
                                    return(
                                        <Col xs={6} key={item.name+item.id}>
                                            <Card data={item} handleRemove={() => handleRemove(item.id)} handleClick={() => navigate(`${routes.DETAILS(item.name)}`)} />
                                        </Col>
                                    )
                                })
                        }
                        <div className='d-flex justify-content-center mt-4 mb-3' ref={loadMoreRef}>
                            {
                                loadingScroll
                                    ?
                                    <Spinner animation="border" />
                                    :
                                    null
                            }
                        </div>
                    </Row>
            }
        </Container>
    )
}

export default FavoriteList
