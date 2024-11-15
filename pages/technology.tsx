import { FormEvent } from "react";
import {
    Technology, Text, Pictures, Image, Text2
} from "../styles/technologyStyles";
import photoNano1 from '../Pictures/photoNano1.jpeg'
import photoNano2 from '../Pictures/photoNano2.jpeg'

const technology = () => {
    return (
        <Technology>
            <Text>
                Делаем незаметные нано- и микрокаплусы по нашей уникальной технологии наращивания
            </Text>
            <Pictures>
                <Image src={photoNano1.src} />
                <Text2>
                    Нанокапсулы - самые маленькие и незаметные
                </Text2>
                <Image src={photoNano2.src} />
                <Text2>
                    Маленькие и аккуратные микрокапсулы
                </Text2>
            </Pictures>
        </Technology>
    )
}
export default technology