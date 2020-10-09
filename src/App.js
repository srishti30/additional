import React from 'react';

import './index.css';
import data from './data.json';
import Products from "./components/Products";
import Cart from "./components/Cart";
import Admin from "./components/Admin.js";
import { BrowserRouter, Route,Switch, Link } from "react-router-dom";

import Header from './components/Header';

class App extends React.Component {
   constructor() {
     super();
     this.state={
       products:data.products,
       cartItems:[],
       size:"",
       sort:"",
     };
   }
    removeFromCart =(product) =>{
      const cartItems=this.state.cartItems.slice();
      this.setState({
        cartItems:cartItems.filter((x)=>x._id!==product._id),

      });
    };
     addToCart=(product)=> {
       const cartItems=this.state.cartItems.slice();
       let alreadyInCart=false;
       cartItems.forEach((item)=>{
         if(item._id===product._id){
           item.count++;
           alreadyInCart=true;
         }
       
          } );
       if(!alreadyInCart){
         cartItems.push({...product,count:1});
       }
       this.setState({cartItems});
     };

  render()
  {
  return (
  
     <BrowserRouter>
    <div className="grid-container">
      <Header>
      <Switch>
      <Link to="/">React Shopping Cart</Link>
      <Link to="/Admin">React Shopping Cart</Link>
      </Switch>
      </Header>
      <main>
      <div className="content">
      <div className="main">
      <Products products={this.state.products}
                addToCart={this.addToCart}>
      </Products>
      </div>
      <div className="sidebar">
      <Cart cartItems={this.state.cartItems}
            removeFromCart={this.removeFromCart}
      ></Cart>
      </div>
      <Switch>
      <Route  path="/Admin" component={Admin} />
      </Switch>
     
      
      </div>
        
      </main>
      <footer>
      @All rights reserved
      Made by srishti
     </footer>
      
    </div>
    </BrowserRouter>
  
  );
}
}


export default App;
