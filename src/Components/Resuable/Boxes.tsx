import React from 'react'
import styled from 'styled-components'

type iBg = {
    bgCols:string
    text: number
} 

const Boxes:React.FC<iBg> = ({bgCols, text}) => {

  return (
    <Container bgCols={bgCols}>{text}</Container>
  )
}

export default Boxes

const Container = styled.div<{bgCols: string}>`
width: 70px;
height: 70px;
background-color:${({bgCols})=> bgCols};
border-radius: 10px;
`