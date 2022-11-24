import { PhotoContainer, Img } from "../styles/drawPagePhotoStyles";

interface Photo {
    alt: string;
    src: string;
}

const DrawPagePhoto = ({ alt, src }: Photo) =>
(
    <PhotoContainer>
        <Img
            alt={alt}
            src={src}
        />
    </PhotoContainer>
)
export default DrawPagePhoto;