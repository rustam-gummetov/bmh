import Image from "next/image"
import styled from "styled-components"

// export const Header = styled.header`
//     display: flex;
//     width: 100%;
//     height: 90px;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px 20px;
//     background-color: rgb(42, 42, 42);
// `

export const MonroeImgHolder = styled.div`
    width: 70px;
    height: 70px;
`

export const MonroeImg = styled(Image)`

`

export const Logo = styled.div`

`

export const Address = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

export const PhoneNumberText = styled.p`
    font-size: 21px;
    text-align: right;
    font-weight: 400;
`

export const MapsHolder = styled.span`

`

export const Networks = styled.div`
    display: flex;
    align-items: center;
`

export const NetworkHolder = styled.div`
    margin: 0 10px;
    display: flex;
    align-items: center;
`

export const ElvisImgHolder = styled.span`
    width: 70px;
    height: 70px;
`

export const ElvisImg = styled(Image)`

`

export const Main = styled.main`
    position: relative;
    float: left;
    width: 100%;
    text-align: center;
`