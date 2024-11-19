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
                    <Link href="https://t.me/beautymos_hair">
                        <Image src={Telegram.src} />
                    </Link>
                    <Link href="https://wa.me/message/JYI57WGO7TFPD1">
                        <Image src={WhatsApp.src} />
                    </Link>
                    <Link href="viber://add?number=79958807065">
                        <Image src={Viber.src} />
                    </Link>
                </Pictures>
                <Text>
                    Или звоните:
                </Text>
                <Text>
                    <Link href="tel:+79958807065">
                        +7 (995) 880-70-65
                    </Link>
                </Text>
                <Text>
                    <Link href="tel:+79048375193">
                        +7 (904) 837-51-93
                    </Link>
                </Text>
            </Info>
        </Connection>
    )
}
export default connection