import styled from "styled-components"

export const SignUpOnlineDiv = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: yellow;
    display: flex;
    justify-content: center;
    opacity: 0.8;
    cursor: pointer;
    z-index: 1;

    /* position: absolute !important;
    left: 50% !important;
    top: 50% !important;
    -webkit-transform: translate(-50%, -50%) !important;
    -moz-transform: translate(-50%, -50%) !important;
    -o-transform: translate(-50%, -50%) !important;
    transform: translate(-50%, -50%) !important;
    border-radius: 50% !important;
    border-color: #1c84c6;
    color: #1c84c6;
    border: 2px solid !important;
    width: 105%;
    height: 105%;
    opacity: .9 !important;
    box-sizing: border-box !important; */
    /* -webkit-animation: wave-stroke 2s infinite cubic-bezier(.37, 0, .8, .77);
    -moz-animation: wave-stroke 2s infinite cubic-bezier(.37, 0, .8, .77);
    -o-animation: wave-stroke 2s infinite cubic-bezier(.37, 0, .8, .77); */ 
`

export const SignUpButton = styled.button`
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 100px;
    height: 100px;
    background-color: transparent;

    width: 100px;
    height: 100px;
    border: 1px solid yellow;
    border-radius: 50%;

    animation: wave 2s infinite;

    @keyframes wave {
        from {     
            transform: scale(1.05);
        }   
        to {
            transform: scale(2);
        }
    }
`

export const Span = styled.span`
    color: black;
    font-size: 20px;
    font-weight: bold;
    align-self: center;
    text-align: center;
`