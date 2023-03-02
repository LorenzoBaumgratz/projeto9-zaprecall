import { useState } from "react"
import styled from "styled-components"
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"

export default function Pergunta(props) {

    const [abrir, setAbrir] = useState(false);
    const [abrirResposta, setAbrirResposta] = useState(false);

    return (
        <>
            <CaixaPergunta abrir={abrir} abrirResposta={abrirResposta}>
                Pergunta {props.numero}
                <img src={play} alt="play" onClick={() => setAbrir(true)} />
            </CaixaPergunta>
            <PerguntaAberta abrir={abrir} abrirResposta={abrirResposta}>
                {props.question}
                <img src={virar} alt="icone" onClick={() => setAbrirResposta(true)} />
            </PerguntaAberta>
            <Resposta abrir={abrir} abrirResposta={abrirResposta}>
                {props.answer}
                <CaixaBotoes>
                    <Button cor={"#FF3030"}>Não lembrei</Button>
                    <Button cor={"#FF922E"}>Quase não lembrei</Button>
                    <Button cor={"#2FBE34"}>Zap!</Button>
                </CaixaBotoes>
            </Resposta>
        </>
    )
}

const CaixaPergunta = styled.div`
    display: ${(props) => !props.abrir && !props.abrirResposta ? "flex" : "none"};
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 0 15px;
    font-weight: 700;
    font-size: 16px;
`
const PerguntaAberta = styled.div`
    height: 131px;
    width: 299px ;
    background-color: #ffffd4;
    display: ${(props) => props.abrir && !props.abrirResposta? "" : "none"};
    font-weight: 400;
    font-size: 18px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    position: relative;
    img{
        position: absolute;
        right: 15px;
        bottom: 6px;
        width: 30px;
        height: 20px;
    }
`

const CaixaBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
    padding: 10px 17px;
`
const Button = styled.button`
    background-color: ${(props) => props.cor};
    width: 85px;
    height: 37px;
    font-size: 12px;
    font-weight: 400;
    border: none;
    border-radius: 5px;
    
`

const Resposta = styled.div`
    height: 131px;
    width: 299px ;
    background-color: #ffffd4;
    display: ${(props) => props.abrir && props.abrirResposta? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    gap: 20px;
    
`