
import Header from './components/Lyaout/Header'
import Cart from "./components/Cart/Cart"
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';



function App() {

  const [isShownCart, setIsShownCart] = useState(false)

  const showCartHandler = () => {
    setIsShownCart(true)
  }

  const hideCartHandler = () => {
    setIsShownCart(false)
  } 
  return (
     
        <CartProvider>
      {isShownCart && <Cart closeCart={hideCartHandler} />}
      <Header showCart={showCartHandler} />
      <main>
        <Meals />
      </main>

     </CartProvider>
   
  );
}

export default App;
