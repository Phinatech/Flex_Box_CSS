import React, { useState } from 'react'
import styled from 'styled-components'
import Data from '../Components/DataFolder/Data'

const HomeScreen = () => {
const [count, setCount] = useState(0)

const increament = ()=>{
    if (count < Data.length - 1) {
      setCount(() => count + 1);
    }else{
        setCount(0)
    }
}
const decreament = ()=>{
    setCount(()=> count -1)

    if(count <= 0){
        setCount(0)
    }
}
console.log(Data[count].name);
console.log(count);

  return (
    <Conatainer>
      {Data[count].name}
      <Hold>
        <button onClick={decreament}> previous</button>
        <button onClick={increament}> next</button>
      </Hold>
    </Conatainer>
  );
}

export default HomeScreen

const Conatainer = styled.div`

`;

const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button {
    padding: 15px 20px;
    font-size: 18px;
    background-color: lightblue;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    color: #02024b;

    @media screen and (max-width: 400px) {
      font-weight: 600;
      padding: 10px 15px;
    }
  }

  :hover {
    background-color: #fff;
    color: #02024b;
    transition: all 35oms ease-in-out;
  }
`;