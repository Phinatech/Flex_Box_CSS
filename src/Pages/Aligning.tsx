import React, { useState } from "react";
import styled from "styled-components";
import Boxes from "../Components/Resuable/Boxes";
import Buttons from "../Components/Resuable/Buttons";
import { Header } from "../Components/Blocks"
const Aligning = () => {
  const [show, setShow] = useState("");

  const toggle = (value: string) => {
    setShow(value);
  };

  return (
    <Container>
      <Wrapper>
        <Header textchange="Align Items" />
        <Hold justify={show}>
          <Boxes bgCols="#c72929" text={1} />
          <Boxes bgCols="#cfb955" text={2} />
          <Boxes bgCols="#29a7c7"  text={3}/>
        </Hold>
        {/* Clickable buttons */}
        <Btn>
          <Buttons
            text="align-items: flex-start;"
            Bgcol="#ffffff1f"
            my_value=" flex-start"
            setShow={setShow}
          />
          <Buttons
            text="align-items: center;"
            Bgcol="#ffffff1f"
            my_value="center"
            setShow={setShow}
          />
          <Buttons
            text="align-items:flex-end;"
            Bgcol="#ffffff1f"
            my_value=" flex-end"
            setShow={setShow}
          />
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Aligning;

const Btn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

`;
const Hold = styled.div<{ justify: string }>`
  width: calc(100% - 10px);
  height: 200px;
  background-color: #391747;
  border-radius: 8px;
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 10px;
  align-items: ${({ justify }) => justify};
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Container = styled.div`
  width: 100%;
`;
