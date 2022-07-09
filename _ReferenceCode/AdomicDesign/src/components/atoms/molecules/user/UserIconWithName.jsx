import styled from "styled-components"
import { useContext } from "react"
import { UserContext } from './../../../../page-providers/UserProvider';
import { useRecoilValue } from "recoil";
import { userState } from './../../../../store/userState';

export const UserIconWithName = (props) => {
    const {img, name} = props
    // const {userInfo} = useContext(UserContext);

    // <<<< recoil 사용법 >>>>
    // useRecoilValue : 값만 참조 (set불가)
    // useSetRecoilState : 값 저장만 가능 (참조불가)
    // useRecoilState : 값 참조 및 값 저장
    const userInfo = useRecoilValue(userState);

    const isAdmin = userInfo ? userInfo.isAdmin : false;
    return (
        <SContainer>
            <SImg height={160} width={160} src={img} alt="프로필" />
            <SName>{name}</SName>
            { isAdmin && <SEdit>편집</SEdit> }
        </SContainer>
    )
}

const SEdit = styled.span`
    text-decoration: underline;
    color: #aaa;
    cursor: pointer;
`

const SContainer = styled.div`
    text-align: center;
`

const SImg = styled.img`
    border-radius: 50%;
`

const SName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
    color: #40514e;
`