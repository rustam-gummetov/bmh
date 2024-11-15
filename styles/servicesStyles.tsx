import styled from "styled-components"

export const Services = styled.div`
    margin: 70px 70px;
    height: 900px;
    border-radius: 30px;
    display: flex;
    background-color: #0f0f0f;
    /* min-width: 1200px; */

    @media (max-width: 1200px) {
        height: 700px;
    }

    @media (max-width: 1050px) {
        height: 500px;
    }

    @media (max-width: 767px) {
        display: block;
        height: auto;
        min-width: 200px;
        width: 333px;
        background-color: black;
        margin: 30px auto;
    }
`

export const Pictures = styled.div`
    height: 900px;
    border-radius: 30px;

    @media (max-width: 767px) {
        width: 333px;
        height: 500px;
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

export const Image = styled.img`
    height: 900px;
    border-radius: 0 30px 30px 0;

    @media (max-width: 1200px) {
        height: 700px;
    }

    @media (max-width: 1050px) {
        height: 500px;
    }

    @media (max-width: 767px) {
        width: 333px;
        height: auto;
        border-radius: 20px;
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

export const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 25px;
    align-self: center;
    border: 3px solid #9e29d4;
    background-color: #9e29d4;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    display: block;
	flex-wrap: wrap;
	justify-content: center ;
    /* position: relative; */
    z-index: 1; 
    overflow: hidden;
    margin-top: 150px;
    /* margin: auto; */
    justify-self: end;
    transition: 0.2s;

    :hover {
        border: 3px solid #682e83;
        background-color: #682e83;
    }

    @media (max-width: 1600px) {
        margin-top: 100px;
    }

    @media (max-width: 1050px) {
        margin-top: 50px;
    }

    @media (max-width: 910px) {
        margin-top: 30px;
    }

    @media (max-width: 767px) {
        justify-self: center;
    }

    @media (max-width: 600px) {
        width: 220px;
        margin-top: 50px;
    }
`

export const TextButton = styled.p`
    font-size: 25px;
    color: white;

    @media (max-width: 600px) {
        font-size: 20px;
        /* padding-bottom: 3px; */
    }
`

export const Ul = styled.ul`
    /* list-style-position: inside; */
    list-style-type: "✅";
    padding-left: 25px;
    /* font-size: 40px;
    line-height: 50px; */
`

export const Li = styled.li`
    color: #b9b7b7;
    padding-top: 20px;
    font-size: 40px;
    line-height: 45px;
    padding-left: 15px;

    ::marker {
        font-size: 0.5em;
    }

    @media (max-width: 1200px) {
        font-size: 25px;
        line-height: 30px;
    }

    @media (max-width: 910px) {
        font-size: 20px;
        line-height: 25px;
    }

    @media (max-width: 767px) {
        font-size: 30px;
        line-height: 60px;
    }
`