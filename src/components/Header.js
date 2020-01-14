import React from 'react';
import logo from '../images/logo.png';


const Header = () => {
    return (
        <header className="App-header">
            <img scr={logo} alt="Rick and Morty logo" style={{ height: "12vh" }} />
        </header>
    );
};

export default Header;