import styled from "styled-components"
import { BaseButton } from "./BaseButton";
import { BtProps } from "./types/ButtonType";

export const BlueButton = (props :BtProps) => {
    const { children, onClick } = props;
    return(
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: blue;
    color: white;
`