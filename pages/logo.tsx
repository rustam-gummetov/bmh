import Image from 'next/image';
import { LogoComponent } from '../styles/logoStyles';
import PictureLogo from '../Pictures/logo2.png'

const Logo = (props) => (
    <Image width={props.width} height={props.height}
        src={PictureLogo}
    />
)
export default Logo;
