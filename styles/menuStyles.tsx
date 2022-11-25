import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
`

export const MenuItemText = styled.li`
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