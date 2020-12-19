import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Checkout extends Component {
    state = { name:"",email:"",address:"" }
    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitOrder = (e) =>{
        e.preventDefault();
        const order ={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems
        }
        this.props.createOrder(order);
        this.setState({name:"",email:"",address:""})
    }
    render() { 
        return ( 
            <Fade right cascade>
                <div className="checkout">
                <form onSubmit={this.submitOrder}>
                    <ul className="form-container">
                        <li>
                            <label>Name</label>
                            <input  type="text"
                                    name="name"
                                    value={this.state.name}
                                    required
                                    onChange={this.handleChange} />
                        </li>
                        <li>
                            <label>Email</label>
                            <input  type="email"
                                    name="email"
                                    value={this.state.email}
                                    required
                                    onChange={this.handleChange} />
                        </li>
                        <li>
                            <label>Address</label>
                            <input  type="text"
                                    name="address"
                                    value={this.state.address}
                                    required
                                    onChange={this.handleChange} />
                        </li>
                        <li>
                            <button className="secondary">Checkout</button>
                        </li>
                    </ul>
                </form>
            </div>
        </Fade>
         );
    }
}
 
export default Checkout;
