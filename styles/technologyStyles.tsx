import styled from "styled-components"

export const Technology = styled.div`
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

export const Text = styled.p`
    color: white;
    /* padding-top: 30px; */
    font-size: 60px;
    line-height: 100px;

    @media (max-width: 1600px) {
        font-size: 50px;
        line-height: 80px;
    }

    @media (max-width: 1350px) {
        font-size: 40px;
        line-height: 70px;
    }

    @media (max-width: 1200px) {
        font-size: 35px;
        line-height: 60px;
    }

    @media (max-width: 1050px) {
        font-size: 30px;
        line-height: 50px;
    }

    @media (max-width: 910px) {
        font-size: 25px;
        line-height: 40px;
    }

    @media (max-width: 767px) {
        font-size: 30px;
        line-height: 60px;
    }
`

export const Pictures = styled.div`
    /* height: 900px; */
    border-radius: 30px;
    /* display: inline-block; */
    padding-top: 30px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px 15px;
    justify-content: center;
    width: auto;

    @media (max-width: 767px) {
        width: 333px;
        padding-top: 15px;
        /* height: 500px; */
        gap: 20px;
        grid-template-columns: auto;
    }
`

export const Image = styled.img`
    height: 600px;
    /* padding: 5px; */

    @media (max-width: 1200px) {
        height: 500px;
    }

    @media (max-width: 1050px) {
        height: 300px;
    }

    @media (max-width: 767px) {
        width: 100%;
        /* padding: 2px; */
        height: auto;
    }
`

export const Text2 = styled.p`
    display: none;

    @media (max-width: 767px) {
        display: block;
        color: #5c5959;
        padding-bottom: 30px;
        font-size: 20px;
    }
`