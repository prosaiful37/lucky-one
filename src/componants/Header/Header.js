import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Magic-Watches</h1>
                <div>
                    <a href="/Home">Home</a>
                    <a href="/Shop">Shop</a>
                    <a href="/Cart">Cart</a>
                    <a href="/Cart">Womens</a>
                    <a href="/Cart">Mens</a>
                    <a href="/Cart">Blog</a>
                </div>
            </div>
            
        </div>
    );
};

export default Header;