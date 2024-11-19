import { FormEvent } from "react";
import {
    Content, Pictures, Info, Image, Text, Button, TextButton, Link
} from "../styles/contentStyles";
import photoHair from '../Pictures/photoHair.jpg'

const content = () => {
    return (
        <Content>
            <Pictures>
                <Image src={photoHair.src} />
            </Pictures>
            <Info>
                <Text>
                    BeautyMos_Hair - это команда профессионалов с большим опытом в работе с вашими волосами. Запишись прямо сейчас и получи  скидку на любую услугу студии!
                </Text>
                <Button>
                    <Link href="#SignUpOnline">
                        <TextButton>
                            Забронировать скидку
                        </TextButton>
                    </Link>
                </Button>
            </Info>
        </Content>
    )
}
export default content