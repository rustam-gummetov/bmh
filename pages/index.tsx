import {
    Main,
} from '../styles/indexStyles'
import Header from './header'
import Photos from './photos'
import Price from './price'
import SignUpOnline from './signUpOnline'
import Examples from './examples'
import Map from './map'
import Footer from './footer'
import SignUpOnlineButton from './signUpOnlineButton'

const HomePage = () =>
(
    <>
        <Header />
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
        <Footer />
        <SignUpOnlineButton />
    </>
)
export default HomePage;
