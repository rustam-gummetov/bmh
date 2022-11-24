import {
    Header, MonroeImgHolder, MonroeImg, Menu, MenuItem, MenuItemText,
    Logo, Address, PhoneNumberText, VkIconHolder, InstIconHolder,
    ElvisImgHolder, ElvisImg, Main, MapsHolder, Networks, NetworkHolder
} from '../styles/indexStyles'
import Marilyn_Monroe from '../Pictures/marilyn-monroe2.png'
import Elvis from '../Pictures/elvis.png'
import PictureLogo from '../Pictures/logo2.png'
import PictureVk from '../Pictures/vk500.png'
import PictureInst from '../Pictures/instagram500.png'
import PictureTelegram from '../Pictures/telegram500.png'
import Vk from '../Pictures/VK_black.svg'                       //Black
import Instagram from '../Pictures/Instagram_black.svg'         //Black
import Telegram from '../Pictures/Telegram_black.svg'           //Black
// import Vk from '../Pictures/VK.svg'                             //Color
// import Instagram from '../Pictures/Instagram.svg'               //Color
// import Telegram from '../Pictures/Telegram.svg'                 //Color
import Maps from '../Pictures/yandexMaps.png'

import Photos from './photos'
import Price from './price'
import SignUpOnline from './signUpOnline'
import Examples from './examples'
import Map from './map'
import SignUpOnlineButton from './signUpOnlineButton'

import Image from 'next/image';
import Link from 'next/link';

const HomePage = () =>
(
    <>
        <Header>
            <MonroeImgHolder>
                <MonroeImg
                    src={Marilyn_Monroe}
                    height='70'
                    width='70'
                    style={{ objectFit: "cover" }}
                />
            </MonroeImgHolder>
            <Menu>
                <MenuItem>
                    <Link href="#SignUpOnline">
                        <MenuItemText>
                            Записаться онлайн
                        </MenuItemText>
                    </Link>
                    <Link href="#Price">
                        <MenuItemText>
                            Услуги и цены
                        </MenuItemText>
                    </Link>
                    <Link href="#Examples">
                        <MenuItemText>
                            Примеры работ
                        </MenuItemText>
                    </Link>
                </MenuItem>
            </Menu>
            <Logo>
                <Image
                    src={PictureLogo}
                />
            </Logo>
            {/* <Data> */}
            <Address>
                <PhoneNumberText>
                    Ижевск, улица Авангардная, 6
                    <br></br>
                    +7 996 693-45-69
                </PhoneNumberText>
                <MapsHolder>
                    <a target={"_blank"} rel={"noopener"} href={"https://yandex.ru/maps/44/izhevsk/house/avangardnaya_ulitsa_6/YUoYdAVoSEwHQFtsfXR3cHxkZg==/?indoorLevel=1&ll=53.228190%2C56.861072&z=17"}>
                        <Image
                            src={Maps}
                            height='50'
                            width='50'
                        />
                    </a>
                </MapsHolder>
            </Address>
            <Networks>
                <NetworkHolder>
                    <a target={"_blank"} rel={"noopener"} href={"https://vk.com/dora_hair"}>
                        <Image
                            src={Vk}
                            height='40'
                            width='40'
                        />
                    </a>
                </NetworkHolder>
                <NetworkHolder>
                    <a target={"_blank"} rel={"noopener"} href={"https://instagram.com/cany_doy?igshid=YmMyMTA2M2Y="}>
                        <Image
                            src={Instagram}
                            height='40'
                            width='40'
                        />
                    </a>
                </NetworkHolder>
                <NetworkHolder>
                    <a target={"_blank"} rel={"noopener"} href={"https://t.me/dorasin"}>
                        <Image
                            // src={"https://www.redwhite.ru/upload/iblock/229/qdq6pl4v3arkhirauqjm01869b4hj52r/tg.png"}
                            src={Telegram}
                            height='40'
                            width='40'
                        />
                    </a>
                </NetworkHolder>
            </Networks>

            <ElvisImgHolder>
                <ElvisImg
                    src={Elvis}
                    height='70'
                    width='70'
                    objectFit='contain'
                />
            </ElvisImgHolder>
            {/* </Data> */}
        </Header>
        <Main>
            <Photos />
            <Price />
            <SignUpOnline />
            <Examples />
            {/* <a href="https://yandex.ru/maps/44/izhevsk/?utm_medium=mapframe&utm_source=maps"
                style="color:#eee;font-size:12px;position:absolute;top:0px;">
                Ижевск
            </a>
            <a href="https://yandex.ru/maps/44/izhevsk/house/avangardnaya_ulitsa_6/YUoYdAVoSEwHQFtsfXR3cHxkZg==/?indoorLevel=1&ll=53.228190%2C56.861072&utm_medium=mapframe&utm_source=maps&z=17.15"
                style="color:#eee;font-size:12px;position:absolute;top:14px;">
                Авангардная улица, 6 — Яндекс Карты
            </a> */}
            <Map />
        </Main>
        <SignUpOnlineButton />
    </>
)
export default HomePage;
