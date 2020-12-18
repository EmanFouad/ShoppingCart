import React , {Component} from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

class App extends Component {
  state = { 
    products:data.products,
    size:"",
    sort:""
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
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              Carts Items
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

