import styled from "styled-components"
import { DefaultLayout } from './../page_template/DefaultLayout';
import { SecondaryButton } from './../button/SecondaryButton';
import { useLocation, useNavigate } from 'react-router-dom';

// https://reactrouter.com/docs/en/v6/hooks/use-navigate
export const Top = () => {
    const nav = useNavigate();

    function onClickAdmin() {
        nav("/users", { state: {isAdmin: true} });
    }

    function onClickUser() {
        nav("/users", { state: {isAdmin: false} });
    }

    return(
        <DefaultLayout>
            <SContainer>
                <h2>Top Page</h2>
                <br/>
                <SecondaryButton onClick={onClickAdmin}>관리자</SecondaryButton>
                <br/><br/>
                <SecondaryButton onClick={onClickUser}>일반 사용자</SecondaryButton>
            </SContainer>
        </DefaultLayout>
    )
}

const SContainer = styled.div`
    text-align: center;
`