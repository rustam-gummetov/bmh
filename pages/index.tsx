import {
    Main,
} from '../styles/indexStyles'
import SignUpOnline from './signUpOnline'
import Header from './header'
import Content from './content'
import Services from './services'
import Results from './results'
import Technology from './technology'
import Price from './price'
import Connection from './connection'

const HomePage = () =>
(
    <>
        <Header />
        <Content />
        <Services />
        <Results />
        <Technology />
        <Price />
        <Connection />
        {/* <Main> */}
        <SignUpOnline />
        {/* </Main> */}
    </>
)
export default HomePage;
