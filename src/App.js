import styled from "styled-components";
import Inferior from "./components/Inferior";
import Perguntas from "./components/Perguntas";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Perguntas />
      </Container>
      <Inferior />
    </>
  );
}

const Container = styled.div`
  width: 375px;
  height: 667px;
  background-color: #fb6b6b;
`