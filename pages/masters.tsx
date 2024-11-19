import { FormEvent } from "react";
import {
    Masters, Title, Pictures, Image, Text, Info, Master, H2
} from "../styles/mastersStyles";
import Rustam from '../Pictures/Rustam.jpeg'
import Darya from '../Pictures/Darya.jpeg'

const masters = () => {
    return (
        <Masters>
            <Title>
                Наши мастера
            </Title>
            <Info>
                <Master>
                    <Pictures>
                        <Image src={Rustam.src} />
                    </Pictures>
                    <Text>
                        Рустам - топ мастер по наращиванию волос
                    </Text>
                </Master>
                <Master>
                    <Pictures>
                        <Image src={Darya.src} />
                    </Pictures>
                    <Text>
                        Дарья - топ мастер по стрижкам, окрашиванию и наращиванию волос
                    </Text>
                </Master>
            </Info>
            <H2>
                Наши мастера сделают вам наращивание в 4 руки! Так же качественно, но в 2 раза быстрее!
            </H2>
        </Masters>
    )
}
export default masters