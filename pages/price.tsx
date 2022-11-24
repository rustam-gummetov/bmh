import {
    PriceDiv, PriceContainer, Title, PriceImg, ImgBackgroungLeftHolder, ImgBackgroungLeft,
    ImgBackgroundRightHolder, ImgBackgroundRight
} from "../styles/priceStyles";

const Price = () => (
    <PriceDiv id='Price'>
        <ImgBackgroungLeftHolder>
            <ImgBackgroungLeft
                src={"https://sun7-6.userapi.com/s/v1/if2/DZ0tzmAccAw6C-Dd-soiyVvOruaS2CBb_nrZQcnK6ua2D8pRWL9SkzSlPsjClmFB35F-4hXtAWRaunr0vECpeHqN.jpg?size=700x781&quality=96&type=album"}
            />
        </ImgBackgroungLeftHolder>
        <PriceContainer>
            <Title>
                Прайс
            </Title>
            <PriceImg
                alt='Price'
                src={"https://sun9-86.userapi.com/s/v1/if2/fprovW1aFX1rfEm0dHSlUoloiQM-j3_1irt_Phl3IYZM5ZGkTFOehh70bq9FHSt0-D6TAlo5nf1SJ_-MXb_JwVIs.jpg?size=720x1017&quality=96&type=album"}
            />
        </PriceContainer>
        <ImgBackgroundRightHolder>
            <ImgBackgroundRight
                src={"https://sun9-60.userapi.com/s/v1/if2/6uhrCA2-tkfs4qSvcEUqGib3uTqi21Ei6K3nZRA2FhRGT4zX6tenG8LA-ui0_dziMohahsOoV2GWWcS2YBbxpH8-.jpg?size=580x580&quality=96&type=album"}
            />
        </ImgBackgroundRightHolder>
    </PriceDiv>
)
export default Price;