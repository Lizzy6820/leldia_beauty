import React from 'react'
import { Container, Typography, Button, Grid, CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import {Link, useLocation} from 'react-router-dom';
import Footer from '../Footer/Footer';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const location = useLocation();
    const classes = useStyles();
    const handleEmptyCart = () => onEmptyCart();
 

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart,
           <Link className={classes.link} to="/">start adding some</Link>!
        </Typography>
      );
      if (!cart.line_items) return 'Loading';

      const FilledCart = () => (
        <>
        <CssBaseline />
          <Grid container spacing={3}>
            {cart.line_items.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
            
              <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" 
              onClick={handleEmptyCart} >Empty cart</Button>
              <Button className={classes.checkoutButton} to="/checkout" size="large" type="button" variant="contained" 
              color="primary" component={Link} >Checkout</Button>
            </div>
          </div>
        </>
      );

      if (!cart.line_items) return 'Loading';
      
  return (
    <Container>
  
        <div className={classes.toolbar}/>
        <Typography className={classes.title} variant="h4" gutterBottom> Shopping Cart</Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
   
    </Container>
  )
}

export default Cart