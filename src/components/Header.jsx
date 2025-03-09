import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: BF4F74;
`

const Nav = styled.nav`
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 10px;
`

export default function Header() {
    return (
        <Nav>
            <Title>Anime List</Title>
        </Nav>
    )
}
