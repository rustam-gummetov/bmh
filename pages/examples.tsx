import { ExamplesDiv, Title, Photos } from "../styles/examplesStyles";
import { examplesPhotos } from '../photos/examplesPhotos';
import DrawExamplesPhoto from "./drawExamplesPhoto";

const Examples = () =>
(
    <ExamplesDiv id="Examples">
        <Title>
            Примеры работ
        </Title>
        <Photos>
            {
                examplesPhotos.map(
                    photo =>
                        <DrawExamplesPhoto alt={photo.alt} src={photo.src} key={photo.alt} />
                )
            }
        </Photos>
    </ExamplesDiv>
)
export default Examples;