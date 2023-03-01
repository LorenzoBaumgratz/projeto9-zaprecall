import styled from "styled-components"
import play1 from "../assets/seta_play.png"

export default function Pergunta(props) {



    return (
        <CaixaPergunta>
            Pergunta {props.numero}
            <img src={play1} alt="play" /*onClick={abrir}*/ />
        </CaixaPergunta>
    )
}

const CaixaPergunta = styled.div`
    display: flex;
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