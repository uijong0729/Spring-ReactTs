import { FC, ReactNode } from "react";
import styled from "styled-components";

export const CenterContainer :FC<{children: ReactNode}> = ({children}) => {
    return(
        <SContainer>
            { children }
        </SContainer>
    )
}

const SContainer = styled.div`
    display : flex;
    margin: 3%;
    padding: 5%;
    justify-content : center;
    ext-align : center;
    align-items : center;
`