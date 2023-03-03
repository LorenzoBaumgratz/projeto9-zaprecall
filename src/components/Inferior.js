import styled from "styled-components"

export default function Inferior(props){
    return(
        <CaixaInferior data-test="footer">
            <span>{props.quantidade}/{props.quantidadeTotal} CONCLUÍDOS</span>
        </CaixaInferior>
    )
}

const CaixaInferior = styled.div`
    background-color: white;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;
    span{
    font-weight: 400;
    font-size: 16px;
    }
`