import styled from "styled-components"

export const Header = styled.header`
    /* background-color: #ebe4e4; */
    background-color: black;
    padding: 20px 70px;
    /* text-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* min-width: 1200px; */
    min-height: 90px;

    @media (max-width: 767px) {
        padding: 15px;
    }
`

export const NetworksContainer = styled.div`
    width: 200px;
    display: flex;

    @media (max-width: 910px) {
        width: 150px;
    }

    @media (max-width: 767px) {
        width: 115px;
    }
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    justify-self: flex-start;
    cursor: pointer;
    margin-right: 10px;

    @media (max-width: 910px) {
        margin-right: 5px;
        width: 40px;
        height: 40px;
    }

    @media (max-width: 767px) {
        margin-right: 3px;
        width: 35px;
        height: 35px;
    }
`

export const LogoImage = styled.img`
    display: none;

    @media (max-width: 767px) {
        display: block;
        height: 60px;
    }
`

export const StudioName = styled.h2`
    display: inline-block;
    font-size: 40px;
    color: white;

    @media (max-width: 910px) {
        font-size: 35px;
    }

    @media (max-width: 767px) {
        /* font-size: 30px; */
        display: none;
    }

    /* @media (max-width: 500px) {
        font-size: 20px;
    }

    @media (max-width: 440px) {
        display: none;
    } */
`

export const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 25px;
    align-self: center;
    border: 3px solid #9e29d4;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    display: flex;
	flex-wrap: wrap;
	justify-content: center ;
    /* position: relative; */
    z-index: 1; 
    overflow: hidden;
    transition: 0.2s;

    :hover {
        background-color: #c4beb3;
    }

    @media (max-width: 767px) {
        width: 120px;
        height: 30px;
        font-size: 20px;
    }
`

export const TextButton = styled.p`
    font-size: 25px;
    color: #9e29d4;

    @media (max-width: 767px) {
        font-size: 20px;
        padding-bottom: 3px;
    }
`

export const Link = styled.a`
    text-decoration: none;
`