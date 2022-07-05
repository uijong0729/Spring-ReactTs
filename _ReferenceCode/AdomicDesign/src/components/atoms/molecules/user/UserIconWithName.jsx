import styled from "styled-components"
import { useContext } from "react"
import { UserContext } from './../../../../page-providers/UserProvider';

export const UserIconWithName = (props) => {
    const {img, name} = props
    const {userInfo} = useContext(UserContext);
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