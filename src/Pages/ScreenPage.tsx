import React, { useState } from 'react'
import styled from 'styled-components'
import Boxes from '../Components/Resuable/Boxes'
import Buttons from '../Components/Resuable/Buttons';
import { Header } from '../Components/Blocks';
const ScreenPage = () => {
const [show, setShow] = useState("")

const toggle = (value:string)=>{
  setShow(value)
}

  return (
    <Container>
      <Wrapper>
        <Header textchange="Justify Content" />
        <Hold justify={show}>
          <Boxes bgCols="#123456" text={1} />
          <Boxes bgCols="#125634" text={2} />
          <Boxes bgCols="#555612" text={3} />
        </Hold>
        {/* Clickable buttons */}
        <Btn>
          <Buttons
            text="justify-content: flex-start;;"
            Bgcol="#ffffff1f"
            my_value=" flex-start"
            setShow={setShow}
          />
          <Buttons
            text="justify-content: center;"
            Bgcol="#ffffff1f"
            my_value="center"
            setShow={setShow}
          />
          <Buttons
            text="justify-content:flex-end;"
            Bgcol="#ffffff1f"
            my_value=" flex-end"
            setShow={setShow}
          />
          <Buttons
            text="justify-content: space-around;"
            Bgcol="#ffffff1f"
            my_value=" space-around"
            setShow={setShow}
          />
          <Buttons
            text="justify-content: space-between;"
            Bgcol="#ffffff1f"
            my_value=" space-between"
            setShow={setShow}
          />
          <Buttons
            text="justify-content: space-evenly;"
            Bgcol="#ffffff1f"
            my_value=" space-evenly"
            setShow={setShow}
          />
        </Btn>
      </Wrapper>
    </Container>
  );
}

export default ScreenPage

const Btn = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap:12px;




`;
const Hold = styled.div<{justify:string}>`
width: calc (100% - 10px);
background-color: #391747;
border-radius:8px;
display:flex;
gap: 5px;
padding: 10px;
justify-content: ${({justify})=> justify};

`;
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap:20px;

`;
const Container = styled.div`
width: 100%;



`
