import styled from "styled-components"
import logo from "../assets/logo.png"
import Pergunta from "./Pergunta"


export default function Perguntas(props) {
    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    props.setQuantidadeTotal(cards.length);
    
    return (
        <>
            <Superior>
                <img src={logo} alt="logo" />
                <p>ZapRecall</p>
            </Superior>
            <ContainerPerguntas>
                {cards.map((p,i)=><Pergunta key={i} numero={i+1} question={p.question} answer={p.answer} aumentarQnt={props.aumentarQnt}/>)}
            </ContainerPerguntas>

        </>
    )
}

const Superior=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 46px;
    padding-top: 44px;
    img{
    width: 52px;
    height: 60px;
    }
    p{
    font-size: 36px;
    line-height: 44.7px;
    color: white;
    font-weight: 400;
    }
`

const ContainerPerguntas=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 70px;
`