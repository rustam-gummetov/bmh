import { PhotosDiv } from "../styles/photosStyles";
import { pagePhotos } from "../photos/pagePhotos";
import DrawPagePhoto from "./drawPagePhoto";

const Photos = () => (
    <PhotosDiv>
        {
            pagePhotos.map(
                photo =>
                    <DrawPagePhoto alt={photo.alt} src={photo.src} key={photo.alt} />
            )
        }
    </PhotosDiv>
)
export default Photos;