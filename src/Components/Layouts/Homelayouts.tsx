import React from 'react'
import { Outlet } from "react-router-dom"
import { Footer, Header } from '../Blocks'
import styled from 'styled-components'
import { colors } from "../Comons/index"

const Homelayouts = () => {
  return (
    <Container bgCol={colors.ContainerBg}>
      <Wrapper>
       
        <Outlet />
        <Footer/>
      </Wrapper>
    </Container>
  );
}

export default Homelayouts


const Wrapper = styled.div`
  width: 80%;

  height: 75%;
  display: flex ;
  flex-direction: column;
  gap: 15px;

  @media screen and (min-width: 500px) {
    width: 600px;
  }
`;
const Container = styled.div<{bgCol:string}>`
width: 100%;
height: 100vh;
flex-direction: column;
background:${({bgCol})=>bgCol};
display: flex;
justify-content: center;
align-items: center;
color: white;

`