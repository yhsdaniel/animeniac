import { Rating } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ImageAndDescDiv = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;
    text-align: left;
    gap: 16px;

    @media only screen and (max-width: 912px) {
        flex-direction: column;
    }
`

const DescriptionDiv = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
    gap: 2px;

    @media only screen and (max-width: 912px) {
        flex-direction: column;
    }
`

const DescriptionP = styled.p`
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 2rem;
    display: flex;

    &:last-child {
        border-right: none;
    }

    @media only screen and (max-width: 912px) {
        justify-content: start;
        align-items: center;
        width: 100%;
        border: none;
        margin: 5px 0;
        padding: 0;
    }
`

export default function DetailAnime() {
    const { title } = useParams()
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const fetchDetailAnime = async () => {
            try {
                if (title) {
                    const { data: response } = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${title}`)
                    if (response.data && response.data.length > 0) {
                        setDetail(response.data[0])
                        console.log(response.data[0])
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

    if (!detail) return

    return (
        <>
            <ReactPlayer
                url={`https://youtube.com/watch?v=${detail.attributes.youtubeVideoId}?origin=http:localhost:5173`}
                playing={true}
                controls
                width={'auto'}
                height={"500px"}
                style={{ margin: '1rem auto' }}
                config={{
                    youtube: {
                        playerVars: { rel: 0, modestbranding: 1 },
                    },
                    vimeo: {
                        playerOptions: { dnt: 1 }, // Do Not Track mode
                    },
                }}
            />
            <h2 style={{ textAlign: 'left' }}>{detail.attributes.titles.en_jp}</h2>
            <h3 style={{ textAlign: 'left' }}>{detail.attributes.titles.ja_jp}</h3>
            <div>
                <ImageAndDescDiv>
                    <img src={detail.attributes.posterImage.small} alt={detail.attributes.canonicalTitle} />
                    <div>
                        <p>{detail.attributes.synopsis}</p>
                        <DescriptionDiv>
                            <DescriptionP>{detail.attributes.endDate}</DescriptionP>
                            <DescriptionP>
                                <Rating name="half-rating-read" defaultValue={(detail.attributes.averageRating * 5) / 100} precision={0.5} readOnly /> {((detail.attributes.averageRating * 5) / 100).toFixed(1)}
                            </DescriptionP>
                            <DescriptionP>Status: {detail.attributes.status}</DescriptionP>
                            <DescriptionP>Age: {detail.attributes.ageRatingGuide}</DescriptionP>
                        </DescriptionDiv>
                    </div>
                </ImageAndDescDiv>
            </div>
        </>
    )
}
