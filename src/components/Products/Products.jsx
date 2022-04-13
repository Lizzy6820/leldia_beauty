import React from 'react';
import Grid  from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';
import { motion } from "framer-motion"
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';



const Products = ({products, onAddToCart}) => {
  const classes = useStyles();

  return (
    <>
    <Slider />
    <div className={classes.title}>
    <h1 id="makeup" style={{marginLeft: "500px", marginTop:'50px', 
      }}>Featured Makeup Products</h1> </div>
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
     <Categories />
    </main>
      </> 
  )
}

export default Products
