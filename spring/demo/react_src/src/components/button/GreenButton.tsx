import styled from "styled-components"
import { BaseButton } from "./BaseButton";

export const GreenButton = (props) => {
    const { children, onClick } = props;
    return(
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: green;
    color: white;
`