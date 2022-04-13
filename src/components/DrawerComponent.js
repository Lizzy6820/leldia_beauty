
import React, {useState} from 'react'
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import {List,ListItem,ListItemText, IconButton, Drawer} from "@mui/material"

const tabs= ['PRODUCTS', 'CONTACT US']

const DrawerComponent = () => {
    const [drawOpen, setDrawOpen] = useState(false)
  return (
 <>
 <Drawer open={drawOpen}
        onClose={() => setDrawOpen (false)}>
     <List>

       {tabs.map((tab) =>(
         <ListItem key={tab} onClick={() => setDrawOpen (false)}>
           <ListItemText>{tab}</ListItemText>
         </ListItem>
       ))}
     </List>
   </Drawer>
   <IconButton onClick={() => setDrawOpen(!drawOpen)} ><MenuOpenIcon /></IconButton>
 </>
  
 )

}

export default DrawerComponent