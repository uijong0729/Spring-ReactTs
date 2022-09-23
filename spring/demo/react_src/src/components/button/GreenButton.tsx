import styled from "styled-components"
import { BaseButton } from "./BaseButton";
import { BtProps } from "../types/ComponentType";

export const GreenButton = (props :BtProps) => {
    const { children, onClick } = props;
    return(
        <SButton onClick={onClick}>{children}</SButton>
    )
}

const SButton = styled(BaseButton)`
    background-color: green;
    color: white;
`