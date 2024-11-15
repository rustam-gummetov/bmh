import { FormEvent } from "react";
import {
    Services, Pictures, Info, Image, Text, Ul, Li
} from "../styles/servicesStyles";
import photoCapsuly from '../Pictures/photoCapsuly.jpeg'

const services = () => {
    return (
        <Services>
            <Info>
                <Text>
                    Бережное наращивание волос по итальянской методике горячего капсулирования
                </Text>
                <Ul>
                    <Li>Возможность комбинирования длины и оттенков</Li>
                    <Li>Надежная фиксация</Li>
                    <Li>Долгосрочность результата</Li>
                </Ul>
            </Info>
            <Pictures>
                <Image src={photoCapsuly.src} />
            </Pictures>
        </Services>
    )
}
export default services
