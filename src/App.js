import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from './components/Cart/Cart';
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsShown,setcartIsShown]= useState(false);

  const showCartHandler = () =>{
    setcartIsShown(true);
  }

  const hideCartHandler = () =>{
    setcartIsShown(false);
  }
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
     <Meal/>
     </main>
    </CartProvider>
  );
}

export default App;
