import React from 'react'
import styled from 'styled-components'
import CottageIcon from '@mui/icons-material/Cottage';
import { Link } from 'react-router-dom';

const Title = styled.h1`
    font-size: 1.2em;
    text-align: left;
    color: BF4F74;
`

const Nav = styled.nav`
    background-color: #333;
    color: white;
    padding: .3rem 1rem;
    border-radius: 10px;
`

export default function Header() {
    return (
        <Nav>
            <Link to="/" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <CottageIcon style={{ fontSize: '1.5rem', margin: '0 .5rem' }} />
                <Title>AnimeKee</Title>
            </Link>
        </Nav>
    )
}
