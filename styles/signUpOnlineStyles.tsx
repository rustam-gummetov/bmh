import styled from "styled-components"
import InputMask from "react-input-mask";

export const SignUpOnlineDiv = styled.div`
    /* background-color: rgb(87, 82, 82); */
    background-color: black;
    background-size: cover;
    /* animation: changeBackground 15s infinite, changeOpacity 5s infinite 3.8s;

    @keyframes changeOpacity {
        from {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes changeBackground {
        from {
            background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("https://sun9-6.userapi.com/s/v1/ig2/CDg8BA6B3MRQCQfyzj_5RGfU1hUKmHINe6FkSwmfi28ByulcMHFTJsnMyXgA2uR63MwYbphZuWFi5nsNwderzPQo.jpg?size=1920x1280&quality=95&type=album");
        }

        33% {
            background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("https://sun9-48.userapi.com/s/v1/ig2/H58fMnFlq12sKm2T4YzqPpxBO7sIkrd0YJgWCtPk2yUWqV_Chi-1GKxR1BP5juitI87kUjMyTNoObJiX25OD7_Pw.jpg?size=1920x1280&quality=95&type=album");

        }

        66% {
            background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url("https://sun9-43.userapi.com/s/v1/ig2/hxjXpSeZYzd4X4yg16e3-5_a7FwmwxjxWILN1rgyDJiR3M29emoq0fSX9Xvqz6_SNga3crF4AstjDlKhFsO_h8gc.jpg?size=1920x1280&quality=95&type=album");

        }

        to {
            background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("https://sun9-6.userapi.com/s/v1/ig2/CDg8BA6B3MRQCQfyzj_5RGfU1hUKmHINe6FkSwmfi28ByulcMHFTJsnMyXgA2uR63MwYbphZuWFi5nsNwderzPQo.jpg?size=1920x1280&quality=95&type=album");

        }
    } */

    /* background-image: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("https://sun9-6.userapi.com/s/v1/ig2/CDg8BA6B3MRQCQfyzj_5RGfU1hUKmHINe6FkSwmfi28ByulcMHFTJsnMyXgA2uR63MwYbphZuWFi5nsNwderzPQo.jpg?size=1920x1280&quality=95&type=album"); */
    padding: 30px 10px;
`

export const FormContainer = styled.div`
    padding: 10px;
    /* border: 1px solid white; */
    width: fit-content;
    /* width: 400px; */
    text-align: center;
    margin: auto;
    z-index: 10;

    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 50px;
    color: white;
    padding: 10px;
`

export const Form = styled.form`
    /* border: 1px solid white; */
    padding: 300px 10px;
    @media (max-width: 600px) {
        padding: 50px 10px;
        height: 30px;
        font-size: 20px;
    }
    /* text-align: center; */
`

export const Text = styled.p`
    font-size: 26px;
    color: white;
    margin: 0 0 10px 20px;
    text-align: left;
`

export const Select = styled.select`
    font-size: 30px;
    width: 300px;
    height: 40px;
    border-radius: 40px;
    padding: 0 10px;
    font-size: 25px;
    border: 0;
    cursor: pointer;
    display: block;
    text-align: center;
    margin: auto auto 20px auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    @media (max-width: 600px) {
        height: 30px;
        font-size: 20px;
    }
`

export const Option = styled.option`
    color: black;
    border: 1px;
`

export const Label = styled.label`
    
`

export const Input = styled.input`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 40px;
    width: 300px;
    font-size: 25px;
    border-radius: 40px;
    padding: 10px;
    align-self: flex-start;
    @media (max-width: 600px) {
        height: 30px;
        font-size: 20px;
    }

    -webkit-appearance: none;
`

export const InputMaskContainer = styled(InputMask)`
    width: 300px;
    height: 40px; 
    font-size: 25px; 
    border-radius: 40px; 
    padding-left: 10px; 
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    align-self: flex-start;
    @media (max-width: 600px) {
        height: 30px;
        font-size: 20px;
    }
`

export const Button = styled.button`
    width: 200px;
    height: 40px;
    margin-top: 30px;
    font-size: 25px;
    align-self: center;
    border: 1px solid gray;
    border-radius: 20px;
    align-items: center;
    cursor: pointer;
    display: flex;
	flex-wrap: wrap;
	justify-content: center ;
    position: relative;
    z-index: 1; 
    overflow: hidden;

    :hover {
        background-color: #c4beb3;
    }
`