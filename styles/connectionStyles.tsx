import styled from "styled-components"

export const Connection = styled.div`
    margin: 30px 70px;
    height: auto;
    border-radius: 30px;
    display: grid;
    justify-content: center;
    /* background-color: #0f0f0f; */
    /* min-width: 1200px; */

    /* @media (max-width: 1200px) {
        height: 700px;
    }

    @media (max-width: 1050px) {
        height: 500px;
    } */

    @media (max-width: 767px) {
        display: block;
        height: auto;
        min-width: 200px;
        width: 333px;
        background-color: black;
        margin: 30px auto;
    }
`

export const Title = styled.h1`
    font-size: 50px;
    color: white;
    padding: 10px;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 35px;
    }
`

export const Info = styled.div`
    padding: 25px;
    min-height: 10em;
    display: grid;
    /* display: table-cell;
    text-align: center;
    vertical-align: middle; */
`

export const Text = styled.p`
    color: #5c5959;
    font-size: 30px;
    text-align: center;
    line-height: 50px;

    /* @media (max-width: 767px) {
        font-size: 25px;
    } */
`

export const Pictures = styled.div`
    /* height: 900px; */
    border-radius: 30px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    padding: 30px 0;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    justify-self: flex-start;
    cursor: pointer;
    margin-right: 10px;

    /* @media (max-width: 910px) {
        margin-right: 5px;
        width: 40px;
        height: 40px;
    } */

    @media (max-width: 767px) {
        margin-right: 3px;
        /* width: 35px;
        height: 35px; */
    }
`

export const Link = styled.a`
    text-decoration: none;
`