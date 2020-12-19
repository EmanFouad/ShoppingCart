import React , {Component} from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends Component {
  state = { 
    products:data.products,
    size:"",
    sort:"",
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
   }
   filterSize = (size) =>{
    console.log(size)
    if(size === "all"){
      this.setState({size,products:data.products})
    }else{
      this.setState({
        size,
        products:data.products.filter(product=> product.availableSizes.indexOf(size) >=0)
      })
    }
   }
   filterSort = (sort) =>{
    console.log(sort)
    let products = [...this.state.products];
    this.setState({sort , products:products.sort((a,b) =>(
      sort === "lowest" ? 
      ((a.price > b.price) ? 1:-1):
      sort === "highest" ? 
      ((a.price < b.price) ? 1: -1) :
      ((a._id < b._id) ? 1:-1)
    ))})
   }
   addToCart = (product) =>{
    let cartItems = [...this.state.cartItems];
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
    }
    // cartItems.indexOf(product) === -1 && cartItems.push(product);
    this.setState({cartItems});
    localStorage.setItem("cartItems" , JSON.stringify(cartItems));
   }
   removeFromCart =(item)=>{
    let cartItems = [...this.state.cartItems];
    this.setState({cartItems:cartItems.filter(p => p._id !== item._id)} , ()=>localStorage.setItem("cartItems" , JSON.stringify(this.state.cartItems)))
    // localStorage.setItem("cartItems" , JSON.stringify(this.state.cartItems));
   }
   createOrder = (order) =>{
     console.log(order);
   }
  render() { 
    return ( 
      <div className="grid-container">
        <header>
          <h1>Shop</h1>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                      size={this.state.size}
                      sort={this.state.sort}
                      filterSize={this.filterSize}
                      filterSort={this.filterSort} />
              <Products products={this.state.products}
                        addToCart={this.addToCart} />
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder} />
            </div>
          </div>
        </main>
        <footer>
          All right is reserved.
        </footer>
      </div>
     );
  }
}
 
export default App;

