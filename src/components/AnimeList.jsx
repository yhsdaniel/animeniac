import { Skeleton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const AnimeCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.6em;
    cursor: pointer;
    transition: background-color 0.3s ease;
`

const ImageAnime = styled.img`
    border-radius: 10px;
    width: auto;
    height: 300px;
`

const TitleH5 = styled.h5`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    margin: 1em 0;
    text-align: center;
`

export default function AnimeList({ onClick, loading, src, title }) {
    return (
        <AnimeCard>
            <button onClick={onClick}>
                {loading ? (
                    <Skeleton animation='wave' variant='rectangular' width={200} height={300} />
                ) : (
                    <>
                        <ImageAnime src={src} alt="Image Anime" loading='lazy' width={200} height={300} />
                        <TitleH5>{title}</TitleH5>
                    </>
                )}
            </button>
        </AnimeCard>
    )
}
