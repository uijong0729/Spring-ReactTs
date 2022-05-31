/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx,css} from '@emotion/react';
import styled from "@emotion/styled";

export const Emotion = () => {
    // CSS코드 형태
    const containerStyle = css`
        border: solid 2px #392eff;
        border-radius: 20px;
        padding: 8px;
        justify-content: space-around;
        align-items: center
    `;
    // jsx식 인라인 스타일 형태
    const titleStyle = css({
        margin: 0,
        color: '#3d84a8'
    });
    
    return (
        <div css={containerStyle}>
            <p css={titleStyle}>Emotion</p>
            <SButton>APPLY</SButton>
        </div>
    )
}

// styled-jsx방식 스타일 형태
const SButton = styled.button`
    background-color: #abdee8;
    &:hover{
        background-color: #392eff;
        color: aliceblue;
        cursor: pointer;
    }
`