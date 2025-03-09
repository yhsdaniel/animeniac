import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useSearchParams } from 'react-router-dom'

import PaginationComponent from './components/PaginationComponent'
import AnimeList from './components/AnimeList'
import Header from './components/Header'

const WrapperList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
    padding-left: 0;

    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 5px;
    }

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5px;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
    }
`

export default function MainPage() {
    const [query] = useSearchParams()
    const pageQuery = query.get('page')

    const [page, setPage] = useState(parseInt(pageQuery || "1"))
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const totalPages = 1206


    const handleChangePage = (event, value) => {
        let countPage = (value - 1) * 10
        setOffset(countPage)
        setPage(value)
        navigate(`/?page=${value}`)
    }

    const navigate = useNavigate()

    const goToDetail = (title) => {
        navigate(`/anime/${title}`)
    }

    useEffect(() => {
        const currentPage = pageQuery ? parseInt(pageQuery) : 1
        setPage(currentPage)

        const offset = (currentPage - 1) * 10

        const filterAnime = async () => {
            setLoading(true)
            try {
                const { data: response } = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${offset}`)
                setList(response.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        filterAnime()
    }, [page])

    return (
        <>
            {!loading ? (
                <>
                    <Header />
                    <WrapperList>
                        {list?.map((value) => (
                            <AnimeList
                                key={value.id}
                                loading={loading}
                                onClick={() => goToDetail(value.attributes.titles.en_jp)}
                                src={value.attributes.posterImage.small}
                                title={value.attributes.titles.en_jp}
                            />
                        ))}
                    </WrapperList>
                    <PaginationComponent countPage={totalPages} page={page} handleChangePage={handleChangePage} />
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    )
}
