import React from 'react';
<<<<<<< HEAD
import 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/components/header/Header.scss';
import bookStoreLogo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/education.svg';
import cartLogo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/supermarket.svg';
import searchLogo from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/ic_zoom_out_24px.svg';
=======
import './Header.scss';
import bookStoreLogo from '../../assests/images/education.svg';
import cartLogo from '../../assests/images/supermarket.svg';
import searchLogo from '../../assests/images/glass+magnifying+search+icon-1320196065076020865_0.svg';
>>>>>>> 864a72cfb29189eb7237a2ae9c4f4d53dc2a1805

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
