import React from 'react'
import styled from 'styled-components'
import Profile from '../Resuable/Profile';
import pic1 from "../../assets/DP.jpg"

const Footer = () => {
  return (
    <Container>
<div>
    <Profile text='TechPear_07' pic={pic1}/>
</div>
<div>
    <Profile text='Hansolo_@03' pic={pic1}/>
</div>
    </Container>
  );
}

export default Footer

const Container = styled.div`
display: flex;
justify-content: space-between;
`

