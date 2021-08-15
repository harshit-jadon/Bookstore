import React from 'react';
import Successfully from 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/assests/images/Group 4132.svg';
import 'C:/Users/harshit.jadon.MD-CJDKE06555KH/Desktop/Bookstore/book-store/src/components/order-placed/order-placed.scss';

export default function OrderPlaced() {
    return (
        <div className='body-content'>
            <div className='successfully-content'>
                <img src={Successfully} alt='successfully logo' className='successfully-logo'/>
                <span className='message'>Order Placed Successfully</span>
            </div>
            <div className='confirm-message'>
                <p>hurray!!!your order is confirmed the order is #123456 save the order id for further communication..</p>
            </div>
            <div className=''>
                <tr className=''>
                    <th>Email us</th>
                    <th>Contact us</th>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>admin@bookstore.com</td>
                    <td>+91 8163475881</td>
                    <td>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                </tr>
            </div>
            <div>
                <button>CONTINUE SHOPPING</button>
            </div>
        </div>
    )
}
