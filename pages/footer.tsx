import { FooterComponent } from "../styles/footerStyles";
import Logo from "./logo";
import Address from "./address";
import Networks from "./networks";

const Footer = () => (
    <FooterComponent>
        <Logo width={250} height={36} />
        <Address />
        <Networks />
    </FooterComponent>
)
export default Footer;