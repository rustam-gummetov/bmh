import { FormEvent } from "react";
import {
    Pictures, Image, Title, Results, Text, Button, TextButton, Link
} from "../styles/resultsStyles";
import photoBefore1 from '../Pictures/photoBefore1.jpeg'
import photoAfter1 from '../Pictures/photoAfter1.jpeg'
import photoBefore2 from '../Pictures/photoBefore2.jpeg'
import photoAfter2 from '../Pictures/photoAfter2.jpeg'
import photoBefore3 from '../Pictures/photoBefore3.jpeg'
import photoAfter3 from '../Pictures/photoAfter3.jpeg'

const content = () => {
    return (
        <Results>
            <Title>
                Примеры работ
            </Title>
            <Pictures>
                <Image src={photoBefore1.src} />
                <Image src={photoAfter1.src} />
                <Image src={photoBefore2.src} />
                <Image src={photoAfter2.src} />
                <Image src={photoBefore3.src} />
                <Image src={photoAfter3.src} />
            </Pictures>
            <Text>
                Больше фото вы можете найти в нашей группе ВКонтакте и Instagram
            </Text>
            <Button>
                <Link href="https://api.whatsapp.com/send?phone=79508107069">
                    <TextButton>
                        Записаться
                    </TextButton>
                </Link>
            </Button>
        </Results>
    )
}
export default content