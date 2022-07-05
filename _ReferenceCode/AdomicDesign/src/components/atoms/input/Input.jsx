import styled from "styled-components"
import { memo } from 'react';

// 재랜더링이 필요하지 않은 요소는 memo로 감싸서 변화가 없는한 다시 렌더링시키지 않는다.
export const Input = memo((props) => {
    const {placeholder} = props
    return(
        <SInput type="text" placeholder={placeholder} />
    )
});

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`