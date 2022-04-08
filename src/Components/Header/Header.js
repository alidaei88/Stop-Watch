import logo from '../../logo.svg';
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="Header-header">
                
                <img src={logo} className="Header-logo" alt="logo" />
                <h1 className='header-text'>Stop Watch App</h1>
                <span></span>
            </header>
        </>

    )
}

export default Header;