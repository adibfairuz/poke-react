import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Cards/Card1'
import { addOrRemoveFavorite, getPokemons } from '../../redux/modules/pokemon/actions'
import { pokemonsSelector } from '../../redux/modules/pokemon/selectors'
import { debounce } from 'throttle-debounce'
import { useNavigate } from 'react-router-dom'
import routes from '../../config/routes'
import Loading from '../../components/Loading'

function List() {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)
    const [loadingScroll, setLoadingScroll] = useState(false)
    const { loading} = useSelector(pokemonsSelector)
    const loadMoreRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getPokemons({
            params: {
                page,
            },
            callback: (data, error) => {
                if (!error) {
                    setPokemons([
                        ...pokemons,
                        ...data.data.results
                    ])
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
    }, [pokemons, loadingScroll])

    const handleLoadMore = debounce(10, () => {
        let pageOffset = window.pageYOffset + window.innerHeight + 100,
            loadMoreOffset = loadMoreRef?.current?.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        if (pageOffset > loadMoreOffset) {
            if (pokemons.length && !loadingScroll) {
                setLoadingScroll(true)
                setPage(page + 1)
            }
        }
    })

    const handleFavorite = (id) => {
        const index = pokemons.findIndex(item => item.id === id);
        const temp = [...pokemons]
        temp[index].is_favorited = !temp[index].is_favorited
        setPokemons(temp)
        dispatch(addOrRemoveFavorite({
            params: {
                id
            },
            callback: (data, error) => {
                if (!error) {
                    temp[index].is_favorited = data.data.is_favorited
                    setPokemons(temp)
                }else{
                    temp[index].is_favorited = !temp[index].is_favorited
                    setPokemons(temp)
                }
            }
        }))
    }
    
    return (
        <Container>
            <Row>
                {
                    loading && !pokemons.length
                        ? 
                        <Loading />
                        :
                        pokemons.map(item => {
                            return(
                                <Col xs={6} key={item.name+item.id}>
                                    <Card data={item} handleFavorite={() => handleFavorite(item.id)} handleClick={() => navigate(`${routes.DETAILS(item.name)}`)}/>
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
        </Container>
    )
}

export default List
