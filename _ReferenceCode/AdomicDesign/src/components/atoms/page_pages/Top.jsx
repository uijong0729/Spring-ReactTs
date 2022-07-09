import styled from "styled-components"
import { DefaultLayout } from './../page_template/DefaultLayout';
import { SecondaryButton } from './../button/SecondaryButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../../../page-providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from './../../../store/userState';

// https://reactrouter.com/docs/en/v6/hooks/use-navigate
export const Top = () => {
    const nav = useNavigate();
    // const { setUserInfo } = useContext(UserContext);

    // <<<< recoil 사용법 >>>>
    // useRecoilValue : 값만 참조 (set불가)
    // useSetRecoilState : 값 저장만 가능 (참조불가)
    // useRecoilState : 값 참조 및 값 저장
    const setUserInfo = useSetRecoilState(userState)

    function onClickAdmin() {
        setUserInfo({isAdmin: true});
        nav("/users");
    }

    function onClickUser() {
        setUserInfo({isAdmin: false});
        nav("/users");
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