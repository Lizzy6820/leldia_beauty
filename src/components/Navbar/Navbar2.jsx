import React, { useState } from "react";
import {AppBar, IconButton, Badge,  MenuItem, Menu,Avatar,Tooltip,Box,Tab,Tabs,Toolbar,Typography,useTheme,useMediaQuery} from "@mui/material";
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/leldia2.png';
import {Link, useLocation} from 'react-router-dom';
import DrawerComponent from "../DrawerComponent";



const settings = [ 'Sign in',  'Logout'];


const Header = ({totalItems}) => {
  
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("md"));

const location = useLocation();
const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

 const handleCloseUserMenu = () => {
  setAnchorElUser(null);
 };
  
  const [value, setValue] = useState();

  
  return (
    <>
      <AppBar sx={{ background: "#f7e6d9",boxShadow: 'none',  borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
        <Toolbar>
       
        <Typography component={Link} to="/"   sx={{ alignItems: 'center', display: 'flex', textDecoration: 'none', width:"10%", 
        '@media screen and (max-width:900px)': {
             width:'100px'} }} >
            <img src={logo} alt="Leldia Beauty" height="70px" width="300px" />
          </Typography>
            
          {isMobile? (
         <>
         
      
            <div>
            <IconButton component={Link} to="/cart" aria-label="Show cart items"sx={{color:"#cd5e77", marginLeft:'20px'}}>
                  <Badge badgeContent={totalItems} color="secondary" >
                    <ShoppingCart />
                  </Badge>
                </IconButton>
                <DrawerComponent />
        </div>
         </>  
          
          ) :
            (
            <>
              <Tabs
                sx={{ marginLeft: "300px", color:"#cd5e77"}}
                indicatorColor="inherit"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}

              >
                <Tab label=" Products" component={Link} to="/products" sx={{fontWeight: "1000" }} />
                <Tab label="Contact us" href='#contact'sx={{fontWeight: "1000" }} />
              </Tabs>
          
                <Box >
              <Tooltip title="Open Account Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{marginLeft: 50, }} >
              <Avatar>L</Avatar>
            </IconButton>
               </Tooltip>     
              <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
         </Box>
          </>
          )}
      <div  />
          {location.pathname ==='/'&& (
            <div>
            <IconButton component={Link} to="/cart" aria-label="Show cart items"sx={{color:"#cd5e77", marginLeft:'20px'}}>
                  <Badge badgeContent={totalItems} color="secondary" >
                    <ShoppingCart />
                  </Badge>
                </IconButton>
        </div>
           )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;