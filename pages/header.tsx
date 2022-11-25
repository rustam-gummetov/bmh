import { HeaderDiv, ImageHolder } from "../styles/headerStyles";
import Image from 'next/image';
import Menu from './menu'
import Logo from "./logo";
import Address from "./address";
import Networks from "./networks";

import Marilyn_Monroe from '../Pictures/marilyn-monroe2.png'
import Elvis from '../Pictures/elvis.png'

const Header = () => (
    <HeaderDiv>
        <ImageHolder>
            <Image
                src={Marilyn_Monroe}
                height='70'
                width='70'
                style={{ objectFit: "cover" }}
            />
        </ImageHolder>
        <Menu />
        <Logo width={366} height={53} />
        <Address />
        <Networks />
        <ImageHolder>
            <Image
                src={Elvis}
                height='70'
                width='70'
                objectFit='contain'
            />
        </ImageHolder>
    </HeaderDiv>
)
export default Header;