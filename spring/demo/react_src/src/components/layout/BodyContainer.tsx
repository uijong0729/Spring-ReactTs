import { FC, ReactNode } from "react";
import styled from "styled-components"

type Props = {
    children: ReactNode
};

export const BodyContainer :FC<{children: ReactNode}> = ({children}) => {
    return(
        <SContainer>
            { children }
        </SContainer>
    );
}

const SContainer = styled.footer`
    border: 1px solid gray;
    margin: 2%;
    padding: 15px;
    height: 750px;
    overflow: auto;
`