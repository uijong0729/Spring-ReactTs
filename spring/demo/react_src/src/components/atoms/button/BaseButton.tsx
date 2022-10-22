import styled from "styled-components"

export const BaseButton = styled.button`
    border-radius: 16px;
    border: 1px solid black;
    padding: 4px 16px;
    margin-left: 5px;

    &:hover {
        background-color: blue;
        color: white;
        cursor: pointer;
        opacity: 0.8;
    }
`