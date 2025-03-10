import styled from "styled-components";

export const WrapperUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-left: 0;
    grid-gap: 10px;

    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 5px;
    }

    @media only screen and (max-width: 992px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 5px;
    }

    @media only screen and (max-width: 450px) {
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        grid-gap: 5px;
    }
`

export const AnimeCard = styled.li`
    width: 100%;
    cursor: pointer;
    transition: 0.3s ease;
    list-style: none;
`

export const ImageAnime = styled.img`
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;

    @media only screen and (max-width: 412px) {
        height: 250px;
    }
`

export const TitleH5 = styled.h5`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    margin: 1em 0;
    text-align: center;
`

export const Button = styled.button`
    width: 100%;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
        border-color: none;
    }
`