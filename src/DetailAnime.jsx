import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ImageAndDescDiv = styled.div`
    display: flex;
    align-items: start;
    text-align: left;
    gap: 16px;
`

export default function DetailAnime() {
    const { title } = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const fetchDetailAnime = async () => {
            try {
                if(title){
                    const { data: response } = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}`)
                    if(response.data && response.data.length > 0){
                        setDetail(response.data[0])
                    } else {
                        setDetail(null)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetailAnime()
    }, [title])

    if(!detail) return

    return (
        <>
            <h2 style={{ textAlign: 'left' }}>{detail.attributes.titles.en}</h2>
            <div>
                <ImageAndDescDiv>
                    <img src={detail.attributes.posterImage.small} alt={detail.attributes.canonicalTitle} />
                    <div>
                        <p>{detail.attributes.synopsis}</p>
                        <p>Rating: {detail.attributes.averageRating}</p>
                        <p>Status: {detail.attributes.status}</p>
                    </div>
                </ImageAndDescDiv>
            </div>
        </>
    )
}
