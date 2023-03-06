import { useState } from "react";
import styled from "styled-components";
import Inferior from "./components/Inferior";
import Perguntas from "./components/Perguntas";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  const [quantidade,setQuantidade]=useState(0);
  const [quantidadeTotal,setQuantidadeTotal]=useState(0);

  function aumentarQnt(){
    setQuantidade(quantidade+1);
  }

  return (
    
    <>
      <GlobalStyle />
      <Container >
        <Perguntas aumentarQnt={aumentarQnt} setQuantidadeTotal={setQuantidadeTotal}/>
      </Container>
      <Inferior quantidade={quantidade} quantidadeTotal={quantidadeTotal}/>
    </>
  );
}

const Container = styled.div`
  background-color: #fb6b6b;
  height: 667px;
  width: 375px;
`