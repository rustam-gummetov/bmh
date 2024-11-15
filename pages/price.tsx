import { FormEvent } from "react";
import {
    Price, Text, Pictures, Image, Text2, Button, TextButton, Link
} from "../styles/priceStyles";
import photoPrice from '../Pictures/price.jpeg'

const price = () => {
    return (
        <Price>
            <Text>
                Актуальный прайс лист
            </Text>
            <Pictures>
                <Image src={photoPrice.src} />
            </Pictures>
            <Text2>
                Действует акция при наращивании волос тонирование и укладка в подарок!
            </Text2>
            <Link href="https://api.whatsapp.com/send?phone=79508107069">
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