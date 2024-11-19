import { FormEvent } from "react";
import {
    Price, Text, Pictures, Image, Button, TextButton, Link, Title
} from "../styles/priceStyles";
import photoPrice from '../Pictures/price2.jpeg'

const price = () => {
    return (
        <Price>
            <Title>
                Актуальный прайс лист
            </Title>
            <Pictures>
                <Image src={photoPrice.src} />
            </Pictures>
            <Text>
                Действует акция при наращивании волос тонирование и укладка в подарок!
            </Text>
            <Link href="https://wa.me/message/JYI57WGO7TFPD1">
                <Button>
                    <TextButton>
                        Рассчитать стоимость  и объем в WhatsApp
                    </TextButton>
                </Button>
            </Link>

        </Price>
    )
}
export default price