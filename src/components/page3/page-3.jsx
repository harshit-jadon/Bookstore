import React from 'react';
import 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/components/page3/page-3.scss';
import bookpic from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/bookpic.png';

export default function page3() {
    return (
        <div>
            <div className='other-div'>
                <div className='my-cart'>
                    <span>My Cart(2)</span>
                </div>
                <div className='cart-details'>
                    <div>
                        <img src={bookpic} alt='bookpic'/>
                    </div>
                    <div className='book-details'>
                        <span className='book-title'>Don't Make Me Think</span>
                        <span className='author'>by Steve Krug</span>
                        <span className='price'> Rs.1500</span>
                    </div>
                    
                </div>
                <div>
                    <div class="value-button" id="decrease" value="Decrease Value">-</div>
                    <input type="number" id="number" value="1" />
                    <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                </div>
                <div className='placeButton'>
                    <button className='placed-button'>place order</button>
                </div>
            </div>
            <div className='customer-details other-div'>
                <span>Customer Details</span>
            </div>
            <div className='order-summary other-div'>
                <span>Order Summery</span>
            </div>
        </div>
    )
}
