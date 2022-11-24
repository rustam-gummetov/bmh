import { PhotoContainer, Img } from "../styles/drawExamplesPhotoStyles";

interface Photo {
    alt: string;
    src: string;
}

const DrawExamplesPhoto = ({ alt, src }: Photo) =>
(
    <PhotoContainer>
        <Img
            alt={alt}
            src={src}
        />
    </PhotoContainer>
)
export default DrawExamplesPhoto;