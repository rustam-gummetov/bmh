import Link from "next/link";
import { Nav, MenuItemText } from "../styles/menuStyles";

const Menu = () => (
    <>
        <Nav>
            <Link href="#SignUpOnline">
                <MenuItemText>
                    Записаться онлайн
                </MenuItemText>
            </Link>
            <Link href="#Price">
                <MenuItemText>
                    Услуги и цены
                </MenuItemText>
            </Link>
            <Link href="#Examples">
                <MenuItemText>
                    Примеры работ
                </MenuItemText>
            </Link>
        </Nav>
    </>
)
export default Menu;