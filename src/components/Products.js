import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Fade';
import Modal from 'react-modal';
import formatCurrency from './../util';

class Products extends Component {
    state = { product:null }
    openModal = (product) =>{
        this.setState({product})
    }
    closeModal = () =>{
        this.setState({product:null})
    }
    render() { 
        const {product} = this.state;
        const {products,addToCart} = this.props;
        return ( 
            <>
            <Fade bottom cascade>
            <ul className="products">
                {products.map(product =>{
                    return(
                        <li key={product._id}>
                            <div className="product">    
                                <a onClick={()=>this.openModal(product)} href={"#" + product._id}>
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
            </Fade>
            { product && 
                <Modal isOpen={true} onRequestClose={this.closeModal}>
                    <Zoom>
                        <div className="modal-close">
                            <button className="close-modal" onClick={this.closeModal}>X</button>
                        </div>
                        <div className="product-details">
                            <img src={product.image} alt={product.title} />
                            <div className="product-description">
                                <p className="title">{product.title}</p>
                                <p className="description">{product.description}</p>
                                <p className="sizes"><strong>Available Sizes:</strong> {product.availableSizes.map(s => <span>{" "} <button>{s}</button> </span>)}</p>
                                <div className="product-price">
                                   <div className="price">{formatCurrency(product.price)}</div> 
                                    <button className="secondary" onClick={()=> addToCart(product)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </Modal>
            }
            </>
         );
    }
}
 
export default Products;