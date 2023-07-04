import React from 'react'
import styled from 'styled-components';

type Itext = {
    text: string,
    pic:string
}

const Profile:React.FC<Itext> = ({text, pic}) => {
  return (
    <Container>
      <Box1>
        <Hold>
            <Img src={pic}alt="" />
        </Hold>
        <Hold2>{text}</Hold2>
      </Box1>
      
    </Container>
  );
}

export default Profile

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50px;
`
const Hold = styled.div`
width: 30px;
height: 30px;
border-radius: 50px;
background-color: red;

`;
const Hold2 = styled.div`
font-size: 12px;

@media screen and (min-width:500px) {
    font-size: 18px;
}
`;
const Box1 = styled.div`
  display: flex;
  gap: 5px;
`;
const Container = styled.div`
  display: flex;
 
  
`;