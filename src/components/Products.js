import React, { Component } from 'react';
import formatCurrency from './../util';

class Products extends Component {
    state = {  }
    
    render() { 
        const {products,addToCart} = this.props;
        return ( 
            <ul className="products">
                {products.map(product =>{
                    return(
                        <li key={product._id}>
                            <div className="product">    
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}/>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="primary" onClick={()=> addToCart(product)}>Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
         );
    }
}
 
export default Products;