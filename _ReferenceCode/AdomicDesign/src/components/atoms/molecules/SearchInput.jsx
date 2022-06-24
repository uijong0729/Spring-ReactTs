import { Input } from '../input/Input';
import { PrimaryButton } from './../button/PrimaryButton';
import styled from 'styled-components';

export const SearchInput = () => {
    return (
        <SContainer>
            <Input placeholder="검색 조건을 입력"></Input>
            <SButtonWrapper>
                <PrimaryButton>검색</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
}

const SButtonWrapper = styled.div`
    padding-left: 8px;
`

const SContainer = styled.div`
    display: flex;
    align-tiems: center;
    margin-top: 30px;
`