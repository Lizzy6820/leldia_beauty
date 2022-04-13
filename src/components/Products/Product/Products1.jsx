import React from 'react';
import Grid  from '@material-ui/core/Grid';
import Product from '../Product/Product';
import useStyles from './styles';
import { motion } from "framer-motion"
import { CssBaseline } from '@material-ui/core';
import { IconButton,Badge } from '@mui/material';
import { Link,useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';



const Products = ({products, totalItems,onAddToCart}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
    <CssBaseline />
    {location.pathname ==='/products'&& (
          <div >
            <IconButton component={Link} to="/cart" aria-label="Show cart items"sx={{color:"#cd5e77", marginLeft:'20px'}}>
              <Badge badgeContent={totalItems} color="secondary" >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
           )}
    <div className={classes.title}>
    <h1 id="makeup" style={{marginLeft: "500px", marginTop:'100px' }}>Available Products</h1> </div>
    <main className={classes.content}> 
       <div className={classes.toolbar} />
       <Grid container justifyContent="center" spacing={3}>
        {products.map((product) => (
        
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
             <motion.div 
           whileHover={{ 
          scale: 1.005,
           transition: { duration: 0.3 } 
          }}
           whileTap={{ scale: 1.01 }}
         >
            <Product product={product}  onAddToCart={onAddToCart} />
            </motion.div>
          </Grid>
          
        ))}
        
      </Grid>
   
    </main>
      </> 
  )
}

export default Products
