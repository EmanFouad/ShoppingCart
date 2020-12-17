import React , {Component} from 'react';
import Products from './components/Products';
import data from './data.json';

class App extends Component {
  state = { 
    products:data.products,
    size:"",
    sort:""
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

