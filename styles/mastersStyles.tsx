import styled from "styled-components"

export const Masters = styled.div`
    margin: 30px 70px;
    height: auto;
    border-radius: 30px;
    /* display: flex; */
    /* min-width: 1200px; */

    /* @media (max-width: 1200px) {
        height: 700px;
    } */

    /* @media (max-width: 1050px) {
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

export const Pictures = styled.div`
    height: auto;
    border-radius: 30px; 
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    gap: 30px 0;
    padding: 20px 0;

    @media (max-width: 767px) {
        width: 333px;
        /* height: 500px; */
    }
`

export const Image = styled.img`
    height: 500px;
    border-radius: 20px;

    /* @media (max-width: 1200px) {
        height: 700px;
    } */

    @media (max-width: 1050px) {
        height: 300px;
    }

    @media (max-width: 767px) {
        width: 333px;
        height: auto;
        border-radius: 20px;
    }
`

export const Text = styled.p`
    color: #d1caca;
    /* padding-top: 30px; */
    font-size: 50px;
    line-height: 100px;
    margin-bottom: 30px;
    text-align: center;

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
        font-size: 25px;
        line-height: 40px;
        /* text-align: left; */
    }
`

export const H2 = styled.h2`
    color: white;
    /* padding-top: 30px; */
    font-size: 50px;
    line-height: 100px;
    margin-bottom: 70px;
    text-align: center;

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
        font-size: 30px;
        line-height: 40px;
    }

    @media (max-width: 767px) {
        font-size: 30px;
        line-height: 60px;
        text-align: left;
        color: #d1caca;
    }
`

export const Info = styled.div`
    padding: 25px;
    min-height: 10em;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
    width: 100%;
    /* display: table-cell;
    text-align: center;
    vertical-align: middle; */

    @media (max-width: 767px) {
        display: block;
        padding: 0;
    }
`

export const Master = styled.div`
`