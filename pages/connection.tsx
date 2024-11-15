import { FormEvent } from "react";
import {
    Connection, Title, Info, Text, Pictures, Image, Link
} from "../styles/connectionStyles";
import Telegram from '../Pictures/telega.png'
import WhatsApp from '../Pictures/whasapp.png'
import Viber from '../Pictures/viber.png'

const connection = () => {
    return (
        <Connection>
            <Title>
                Связь с нами
            </Title>
            <Info>
                <Text>
                    Пишите нам онлайн:
                </Text>
                <Pictures>
                    <Link href="https://t.me/Rustam072000">
                        <Image src={Telegram.src} />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=79508107069">
                        <Image src={WhatsApp.src} />
                    </Link>
                    <Link href="viber://add?number=79508107069">
                        <Image src={Viber.src} />
                    </Link>
                </Pictures>
                <Text>
                    Или звоните:
                </Text>
                <Text>
                    +79508107069
                </Text>
                <Text>
                    +79048375193
                </Text>
            </Info>
        </Connection>
    )
}
export default connection