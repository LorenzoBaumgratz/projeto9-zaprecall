import { useState } from "react"
import styled from "styled-components"
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import iconeCerto from "../assets/icone_certo.png"
import iconeErro from "../assets/icone_erro.png"
import iconeQuase from "../assets/icone_quase.png"

export default function Pergunta(props) {

    const [abrir, setAbrir] = useState(false);
    const [abrirResposta, setAbrirResposta] = useState(false);
    const [respondida, setRespondida] = useState(false);
    const [zap, setZap] = useState(false);
    const [quase, setQuase] = useState(false);
    const [nao, setNao] = useState(false);

    function responder(tipo) {
        setAbrir(false);
        setAbrirResposta(false);
        setRespondida(!respondida);
        props.aumentarQnt();
        if (tipo === "Não") {
            setNao(!nao);
        }
        if (tipo === "Quase") {
            setQuase(!quase);
        }
        if (tipo === "Zap") {
            setZap(!zap);
        }
    }

    function trocarIcone() {
        if (zap) {
            return iconeCerto;
        }
        if (quase) {
            return iconeQuase;
        }
        if (nao) {
            return iconeErro;
        }
    }

    function trocarPergunta() {
        if (zap) {
            return "#2FBE34";
        }
        if (quase) {
            return "#FF922E";
        }
        if (nao) {
            return "#FF3030";
        }
    }

    function trocarDataTest() {
        if (zap) {
            return "zap-icon";
        }
        if (quase) {
            return "partial-icon";
        }
        if (nao) {
            return "no-icon";
        }
    }



    return (
        <>
            <CaixaPergunta data-test="flashcard" abrir={abrir} abrirResposta={abrirResposta} trocarPergunta={trocarPergunta} respondida={respondida}>
                <span data-test="flashcard-text">Pergunta {props.numero}</span>
                <img data-test={(respondida ? trocarDataTest() : "play-btn")} src={(respondida ? trocarIcone() : play)} alt="play" onClick={() => respondida ? "" : setAbrir(true)} />
            </CaixaPergunta>
            <PerguntaAberta abrir={abrir} abrirResposta={abrirResposta}>
                <span data-test="flashcard-text">{props.question}</span>
                <img data-test="turn-btn" src={virar} alt="icone" onClick={() => setAbrirResposta(true)} />
            </PerguntaAberta>
            <Resposta abrir={abrir} abrirResposta={abrirResposta}>
                <span data-test="flashcard-text">{props.answer}</span>
                <CaixaBotoes>
                    <Button data-test="no-btn" cor={"#FF3030"} onClick={() => responder("Não")}>Não lembrei</Button>
                    <Button data-test="partial-btn" cor={"#FF922E"} onClick={() => responder("Quase")}>Quase não lembrei</Button>
                    <Button data-test="zap-btn" cor={"#2FBE34"} onClick={() => responder("Zap")}>Zap!</Button>
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
    margin-bottom: 25px;
    span{
    text-decoration: ${(props) => props.respondida ? "line-through" : "none"};
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.trocarPergunta()};
    }
`
const PerguntaAberta = styled.div`
    height: 131px;
    width: 299px ;
    background-color: #ffffd4;
    display: ${(props) => props.abrir && !props.abrirResposta ? "" : "none"};
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    position: relative;
    margin-bottom: 25px;
    img{
        position: absolute;
        right: 15px;
        bottom: 6px;
        width: 30px;
        height: 20px;
    }
    span{
    font-weight: 400;
    font-size: 18px;
    }
`

const CaixaBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
    padding: 10px 17px;
    position: absolute;
    left: 0;
    bottom: 0;
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
    display: ${(props) => props.abrir && props.abrirResposta ? "flex" : "none"};
    flex-direction: column;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0,0.15);
    gap: 20px;
    margin-bottom: 25px;
    position: relative;
    span{
    font-weight: 400;
    font-size: 18px;
    }
    
`