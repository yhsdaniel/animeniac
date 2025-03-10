import { Skeleton } from '@mui/material'
import React from 'react'
import { AnimeCard, ImageAnime, TitleH5, Button } from './ui/TagComponent'

export default function AnimeList({ onClick, loading, src, title }) {
    return (
        <AnimeCard>
            <Button onClick={onClick}>
                {loading ? (
                    <Skeleton animation='wave' variant='rectangular' width={200} height={300} />
                ) : (
                    <>
                        <ImageAnime src={src} alt="Image Anime" loading='lazy' width={100} height={200} />
                        <TitleH5>{title}</TitleH5>
                    </>
                )}
            </Button>
        </AnimeCard>
    )
}
