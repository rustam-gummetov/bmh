import { NetworksDiv, NetworkHolder } from "../styles/networksStyles";
import Image from 'next/image';

import Vk from '../Pictures/VK_black.svg'                       //Black
import Instagram from '../Pictures/Instagram_black.svg'         //Black
import Telegram from '../Pictures/Telegram_black.svg'           //Black
// import Vk from '../Pictures/VK.svg'                             //Color
// import Instagram from '../Pictures/Instagram.svg'               //Color
// import Telegram from '../Pictures/Telegram.svg'                 //Color

const Networks = () => (
    <NetworksDiv>
        <NetworkHolder>
            <a target={"_blank"} rel={"noreferrer"} href={"https://vk.com/dora_hair"}>
                <Image
                    src={Vk}
                    height='40'
                    width='40'
                />
            </a>
        </NetworkHolder>
        <NetworkHolder>
            <a target={"_blank"} rel={"noreferrer"} href={"https://instagram.com/cany_doy?igshid=YmMyMTA2M2Y="}>
                <Image
                    src={Instagram}
                    height='40'
                    width='40'
                />
            </a>
        </NetworkHolder>
        <NetworkHolder>
            <a target={"_blank"} rel={"noreferrer"} href={"https://t.me/dorasin"}>
                <Image
                    src={Telegram}
                    height='40'
                    width='40'
                />
            </a>
        </NetworkHolder>
    </NetworksDiv>
)
export default Networks;