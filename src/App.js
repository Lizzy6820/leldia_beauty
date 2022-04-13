import React , { useState, useEffect }from 'react'
import { Products, Navbar2, Cart, Footer} from './components';
import { commerce } from './lib/commerce';
import {Routes, Route } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Link, useLocation} from 'react-router-dom';
import Checkout1 from './components/Checkout/Checkout1';
import Products1 from './components/Products/Product/Products1'




const App = () => {
  const [products, setProducts] = useState([])
    const [cart, setCart] = useState({});
    const location = useLocation();
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
 
    const fetchProducts = async () => {
     const { data } = await commerce.products.list();
     setProducts(data);
   };
 
   const fetchCart = async () => {
     setCart(await commerce.cart.retrieve());
   }
 
   const handleAddToCart = async (productId, quantity) => {
     const response = await commerce.cart.add(productId, quantity);
     setCart(response.cart);
   };
 
   const handleRemoveFromCart = async (productId) => {
     const response = await commerce.cart.remove(productId);
 
     setCart(response.cart);
   };
 
   const handleUpdateCartQty = async (productId, quantity) => {
     const response = await commerce.cart.update(productId, { quantity });
 
     setCart(response.cart);
   };
 
   const handleEmptyCart = async () => {
     const response = await commerce.cart.empty();
 
     setCart(response.cart);
   };
 
   useEffect(() => {
     fetchProducts();
     fetchCart()
   }, []);

   const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
    };
  
   const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  

  return (

   <>
    <CssBaseline />
   <div>
   <Navbar2 totalItems={cart.total_items}/>
   
   <Routes>
     <Route path="/" element={<Products products={products}  onAddToCart={handleAddToCart} />}>
     </Route>
     <Route path="/products" totalItems={cart.total_items} element={<Products1 products={products}  onAddToCart={handleAddToCart} />}>
     </Route>
     
 
     <Route path="/cart" element ={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} 
     onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />} >
     </Route>
  
     <Route path ="/checkout"  element ={<Checkout1 cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout}
      error={errorMessage}/>}>
     </Route> 
    
   </Routes>   

   <Footer />
 </div>
 </>


  )
}

export default App

