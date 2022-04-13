import styled from "styled-components";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import {mobile} from '../responsive';

const Container = styled.div`
  flex: 1;
  margin: 0;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({width: '60%'})}
  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({width:'50%'})}
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    ${mobile({fontSize:'15px'})}
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    border-radius: 5px 5px;

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
          <motion.div
             whileHover={{ 
              scale: 1.1,
               transition: { duration: 0.3 } 
              }}
               whileTap={{ scale: 1.01 }}  
               > 
            <Button component={Link} to="/products">SHOP NOW</Button>
          </motion.div>
      </Info>
      
    </Container>
  );
};

export default CategoryItem;