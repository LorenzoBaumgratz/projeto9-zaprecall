import styled from "styled-components"

export default function Inferior(){
    return(
        <CaixaInferior>
            <span>0/4 CONCLUÍDOS</span>
        </CaixaInferior>
    )
}

const CaixaInferior = styled.div`
    background-color: white;
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
    font-weight: 400;
    font-size: 16px;
    }
`