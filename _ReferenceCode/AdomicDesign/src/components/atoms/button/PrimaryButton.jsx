import styled from "styled-components";
import {BaseButton} from "./BaseButton"

export const PrimaryButton = (props) => {
    const { children } = props;
    return(
        <SButton> { children } </SButton>
    )
}

// 첫 글자 대문자 필수
const SButton = styled(BaseButton)`
    background-color: #40514e;
`;