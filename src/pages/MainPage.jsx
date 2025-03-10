import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import PaginationComponent from '../components/PaginationComponent'
import AnimeList from '../components/AnimeList'
import { WrapperUl } from '../components/ui/TagComponent'

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
        navigate(`/anime/${title}/?page=${page}`)
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
                    <WrapperUl>
                        {list?.map((value, index) => (
                            <AnimeList
                                key={value.id}
                                index={index}
                                onClick={() => goToDetail(value.attributes.titles.en_jp)}
                                src={value.attributes.posterImage.small}
                                title={value.attributes.titles.en_jp}
                            />
                        ))}
                    </WrapperUl>
                    <PaginationComponent countPage={totalPages} page={page} handleChangePage={handleChangePage} />
                </>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    )
}
