import Image from "next/image"
import styled from "styled-components"

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgb(42, 42, 42);
`

export const MonroeImgHolder = styled.div`
    /* float: left;
    padding-left: 50px;
    object-fit: cover;
    margin: 10px 0 10px 0; */
    width: 70px;
    height: 70px;
`

export const MonroeImg = styled(Image)`
    /* height: 70px;
    padding: 20px 0px 20px 0px;
    object-fit: cover; */
`

export const Menu = styled.nav`
    /* display: inline-block;
    height: 100%;
    padding: 10px 0 10px 50px; */
`

export const MenuItem = styled.ul`
    /* color: white;
    height: 100%;
    align-items: center;
    display: inline-flex;
    align-items: center; */
    display: flex;
`

export const MenuItemText = styled.li`
    /* color: white;
    cursor: pointer;
    padding: 10px;
    margin: 5px;
    border: 1px solid white;
    font-size: 20px;
    border-radius: 10px;

    :hover {
        background-color: black;
        color: yellow;
    } */
    list-style-type: none;
    color: white;
    margin: 0 5px;
    padding: 10px;
    cursor: pointer;
    border: 1px solid white;
    font-size: 21px;
    border-radius: 10px;
    :hover {
        background-color: black;
        color: yellow;
    }
`

export const Logo = styled.div`
    /* position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 50px;
    padding: 20px 0px 20px 0px; */
`

// export const LogoImg = styled(Image)`
//     height: 50px;
//     padding: 30px 0px 30px 0px;
// `

export const Data = styled.div`
    /* float: right;
    height: 90px; */
`

export const Address = styled.div`
    /* color: white;
    display: inline-flex;
    padding: 20px 10px 20px 10px;
    vertical-align: top;
    margin: 0 30px; */
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
    /* diplay: inline-flex;
    object-fit: cover;
    cursor: pointer;s */
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

export const VkIconHolder = styled.span`
    /* display: inline-flex;
    padding: 25px 10px 25px 10px;
    object-fit: cover;

    margin: auto;
    cursor: pointer; */
`

export const InstIconHolder = styled.span`
    /* display: inline-flex;
    padding: 25px 10px 25px 10px;
    object-fit: cover;

    margin: auto;
    cursor: pointer; */
`

export const TelegramHolder = styled.span`
    /* display: inline-flex;
    padding: 25px 50px 25px 10px;
    object-fit: cover;
    margin-right: 50px;

    margin: auto;
    cursor: pointer; */
`

export const ElvisImgHolder = styled.span`
    /* float: right;
    padding-right: 50px;
    margin: 10px 0 10px 0; */
    width: 70px;
    height: 70px;
`

export const ElvisImg = styled(Image)`
    /* height: 70px; */
`

export const Main = styled.main`
    position: relative;
    float: left;
    width: 100%;
    text-align: center;
`