import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import formatCurrency from './../util';
import Checkout from './Checkout';
class Cart extends Component {
    state = {showCheckout:false}
    render() {
        const { cartItems, removeFromCart ,createOrder } = this.props;
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
                    <Fade right cascade>
                        <ul>
                            {cartItemsList}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !==0 &&
                    <div className="total">
                        <div>
                        <p>Total:{" "}
                            {formatCurrency(cartItems.reduce((a,c) => a + c.price * c.count , 0))}
                            </p>
                        </div>
                        <button onClick={() => this.setState({showCheckout:true})} className="primary">Proceed</button>
                    </div>
                }
                {this.state.showCheckout && <Checkout cartItems={cartItems} createOrder={createOrder} />}
            </div>
        );
    }
}

export default Cart;