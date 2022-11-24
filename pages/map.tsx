import {
    MapsDiv, Iframe
} from "../styles/mapStyles";

const Map = () => (
    <MapsDiv>
        <Iframe src="https://yandex.ru/map-widget/v1/-/CCUf4OhcgB" frameBorder={1} allowFullScreen={true} />
    </MapsDiv>
)
export default Map