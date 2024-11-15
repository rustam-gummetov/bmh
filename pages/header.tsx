import { FormEvent } from "react";
import {
    Header, Image, StudioName, Button, TextButton, NetworksContainer, LogoImage, Link
} from "../styles/headerStyles";
import VK from '../Pictures/vkontakte.png'
import Inst from '../Pictures/inst.png'
import Telegram from '../Pictures/tg.png'
import Logo2 from '../Pictures/logo2.jpeg'
import { Li } from "../styles/servicesStyles";

const header = () => {
    return (
        <Header>
            <NetworksContainer>
                <Link href="https://vk.com/beautymos_hair">
                    <Image src={VK.src} />
                </Link>
                <Link href="https://instagram.com/beauty.mos_hair?igshid=NTc4MTIwNjQ2YQ==">
                    <Image src={Inst.src} />
                </Link>
                <Link href="https://t.me/Rustam072000">
                    <Image src={Telegram.src} />
                </Link>
            </NetworksContainer>

            <StudioName>
                BeautyMos_Hair
            </StudioName>

            <LogoImage src={Logo2.src} />

            <Link href="#SignUpOnline">
                <Button>
                    <TextButton>
                        Записаться
                    </TextButton>
                </Button>
            </Link>
        </Header>
    )

}
export default header;