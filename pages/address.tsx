import { AddressDiv, PhoneNumberText, MapsHolder } from "../styles/addressStyles";
import Image from 'next/image';
import Maps from '../Pictures/yandexMaps.png'

const Address = () => (
    <AddressDiv>
        <PhoneNumberText>
            Ижевск, улица Авангардная, 6
            <br></br>
            +7 996 693-45-69
        </PhoneNumberText>
        <MapsHolder>
            <a target={"_blank"} rel={"noreferrer"} href={"https://yandex.ru/maps/44/izhevsk/house/avangardnaya_ulitsa_6/YUoYdAVoSEwHQFtsfXR3cHxkZg==/?indoorLevel=1&ll=53.228190%2C56.861072&z=17"}>
                <Image
                    src={Maps}
                    height='50'
                    width='50'
                />
            </a>
        </MapsHolder>
    </AddressDiv>
)
export default Address;