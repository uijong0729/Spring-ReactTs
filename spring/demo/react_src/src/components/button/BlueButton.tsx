import styled from "styled-components"
import { BaseButton } from "./BaseButton";

export const BlueButton = (props) => {
    const { children, onClick } = props;
    return(
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
        background-color: blue;
        color: white;
`