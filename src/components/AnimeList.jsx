import React from 'react'
import { AnimeCard, ImageAnime, TitleH5, Button } from './ui/TagComponent'
import { motion } from 'framer-motion'

export default function AnimeList({ index, onClick, src, title }) {
    return (
        <AnimeCard 
            as={motion.li}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeInOut', type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Button onClick={onClick}>
                <ImageAnime src={src} alt="Image Anime" loading='lazy' width={100} height={200} />
                <TitleH5>{title}</TitleH5>
            </Button>
        </AnimeCard>
    )
}
