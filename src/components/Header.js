import React from 'react';
import RickAndMortyLogo from '../images/RickAndMortyLogo.png';


const Header = () => {
    return (
        <header className="App-header">
            <img scr={RickAndMortyLogo} alt="Rick and Morty logo" />
        </header>
    );
};

export default Header;