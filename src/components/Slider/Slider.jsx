import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "./sliderdata";
import { motion } from "framer-motion"; 
import {mobile} from '../responsive'
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:'none'})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.1s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 70px;
  background-color: #${(props) => props.bg};

 
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  & hover{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;
  }

`;

const Image = styled.img`
  height: 85%;
  width:100%;
  object-fit: cover;

  
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-top: -10px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color:  white;
  cursor: pointer;
  border-radius: 5px 5px;
  
`;

const Slider = () => {
  const location = useLocation()
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
   
    <Container>
  
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img}  />
            
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <motion.div
                whileHover={{ 
                scale: 1.03,
                 transition: { duration: 0.3 } 
                }}
                 whileTap={{ scale: 1.01 }} 
              >
              <Button component={Link} to="/products">SHOP NOW!</Button>
              </motion.div>
            </InfoContainer>
     
          </Slide> 
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
