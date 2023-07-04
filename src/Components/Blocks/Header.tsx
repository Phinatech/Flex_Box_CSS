import React from 'react'
import styled from "styled-components"
import { colors } from '../Comons';
import pic1 from "../../assets/h1.png"
import pic2 from "../../assets/h2.png"

interface Icols {
    textchange:string;
}

const Header:React.FC<Icols> = ({textchange}) => {
  return (
    <Container>
      <Holder1 col={colors.ContainerSubline}>
        Css <span>{textchange}</span> Overview
      </Holder1>
      <Holder2>
      <Img src={pic1} alt="" />
      <Img src={pic2} alt="" />
      </Holder2>
    </Container>
  );
}

export default Header

const Holder2 = styled.div`
  display: flex;
  gap: 2px;
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;


@media screen {
    
}
`;
const Box = styled.div``
const Holder1 = styled.div<{ col: string }>`
  font-size: 18px;
  span {
    color: ${({ col }) => col};
  }

  @media screen and (min-width: 500px) {
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;
const Container = styled.div`
  display: flex;
width: 100%;
  justify-content: space-between;
  align-items: center;
  

`;