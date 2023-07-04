import React from 'react'
import styled from 'styled-components'

type iBtntEXT = {
  text: string;
  Bgcol: string;

  setShow: React.Dispatch<React.SetStateAction<string>>;
  my_value: string;
};

const Buttons:React.FC<iBtntEXT> = ({text,Bgcol,setShow, my_value}) => {

  return (
    <Container
    
      Bgcol={Bgcol}
      onClick={() => {
        setShow(my_value);
      }}
    >
      {text}
    </Container>
  );
}

export default Buttons

const Container = styled.div<{  Bgcol: string }>`
  width: 100%;
  height: 55px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ Bgcol }) => Bgcol};
  :active {
    background-color: #777777f4;
    border: 2px solid green;
  }

  &:hover {
    background-color: #ffffff3e;
  border: 2px solid white;
  
  }
`;