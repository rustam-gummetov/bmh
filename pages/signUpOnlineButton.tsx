import Link from "next/link";
import {
    SignUpOnlineDiv, SignUpButton, Span
} from "../styles/signUpOnlineButtonStyles";

const SignUpOnlineButton = () => (
    <>
        <Link href="#SignUpOnline">
            <SignUpOnlineDiv>
                <Span>Онлайн<br />запись</Span>
            </SignUpOnlineDiv>
        </Link>
        <SignUpButton />
    </>
)
export default SignUpOnlineButton;