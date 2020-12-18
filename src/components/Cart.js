import React, { Component } from 'react';
import formatCurrency from './../util';
class Cart extends Component {
    state = {}
    render() {
        const { cartItems, removeFromCart } = this.props;
        const cartItemsList = cartItems.map(item => {
            return (
                <li key={item._id}>
                    <div>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                        <p>{item.title}</p>
                        <div className="info">
                            <div>{item.count} x {formatCurrency(item.price)}</div>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                </li>
            )
        })
        return (
            <div>
                {!cartItems.length ? <div className="cart cart-header">Your Cart is Empty</div> :
                    <div className="cart cart-header">You have {cartItems.length} Items</div>}
                <div className="cart-items">
                    <ul>
                        {cartItemsList}
                    </ul>
                </div>
                {cartItems.length !==0 &&
                    <div className="total">
                        <div>
                        <p>Total:{" "}
                            {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count , 0))}
                            </p>
                        </div>
                        <button className="primary">Proceed</button>
                    </div>
                }
            </div>
        );
    }
}

export default Cart;