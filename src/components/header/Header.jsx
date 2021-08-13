import React from 'react';
import 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/components/header/Header.scss';
import bookStoreLogo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/education.svg';
import cartLogo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/supermarket.svg';
import searchLogo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/glass+magnifying+search+icon-1320196065076020865_0.svg';

export default function Header() {
    return (
        <div>
           <header class='header-content'>
                <div class = 'logo-bookstore'>
                    <img src={bookStoreLogo} alt ='bookStorelogo'/>
                    <span>Bookstore</span>
                </div>
                <div className='anchor'>
                    <img className='search-logo' src={searchLogo} alt ='searchlogo'/>
                    <input type='search' placeholder='Search...' className='search-bar'/>
                </div>
                <div class='cart-logo'>
                    <span>Cart</span>
                    <img src={cartLogo} alt='cartLogo'/>
                </div>
           </header>
        </div>
    )
}
