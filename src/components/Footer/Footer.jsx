import {Facebook,Instagram,Pinterest,Twitter,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../assets/leldia2.png';
import { mobile } from "../responsive";

  
  const Container = styled.div`
    display: flex;
    background-color: '#FFFDD0';
   
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  

  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    ${mobile({flexDirection:'column'})}
   
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    ${mobile({margin:'10px 0'})}
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
 
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({fontSize:'15px'})}
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    
  `;
  
 
  const Footer = () => {
    return (
      <Container id="contact"> 
        <Left>
        <Title>About Us</Title>
        <img src={logo} alt="Leldia Beauty" height="30%" width="50%"  />
          <Desc>
           This brand was created by a woman of color, for women and color.
           As a minority group, we lack the research and products for our skintones and types. 
           At Leldia Beauty, tons of research on organic products, safety and diversity was taken into consideration
           in creating this brand.
           Try out our products, and give us feednack!
          </Desc>
        </Left>

        <Center>
          <Title>Social</Title>
          <SocialContainer>
            <SocialIcon color= 'cd5e77'>
              <Facebook />
            </SocialIcon>
            <SocialIcon color= 'cd5e77'>
              <Instagram />
            </SocialIcon>
            <SocialIcon color='cd5e77'>
              <Twitter />
            </SocialIcon>
            <SocialIcon color='cd5e77'>
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Center>

        <Right>
        <Title>Useful Links</Title>
          <List>
            <ListItem><Link to="/">Home</Link> </ListItem>
          <ListItem> <Link to="/products">Products</Link> </ListItem>
          <ListItem> <Link to="/">Contact us</Link> </ListItem>
        
            
          </List>
        </Right>

      </Container>
    );
  };
  
  export default Footer;