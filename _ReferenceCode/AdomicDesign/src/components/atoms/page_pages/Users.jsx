import styled from "styled-components"
import { HeaderOnly } from './../page_template/HeaderOnly';
import { SearchInput } from './../molecules/SearchInput';
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from 'react-router-dom';
import { SecondaryButton } from "../button/SecondaryButton";
// import { UserContext } from './../../../page-providers/UserProvider';
// import {useContext} from 'react';
import { useRecoilState } from "recoil"
import { userState } from './../../../store/userState';

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `John hoge ${val}`,
        img: "https://source.unsplash.com/NE0XGVKTmcA",
        email: "asdfg12345@example.com",
        phone: "000-1111-2222",
        department: {
          name: "구매부",
          position: "대리"
        }
    };
});

export const Users = () => {
    //const {userInfo, setUserInfo} = useContext(UserContext);
    
    // <<<< recoil 사용법 >>>>
    // useRecoilValue : 값만 참조 (set불가)
    // useSetRecoilState : 값 저장만 가능 (참조불가)
    // useRecoilState : 값 참조 및 값 저장
    const [userInfo, setUserInfo] = useRecoilState(userState);

    const onClickSwitch = () => {
        if (userInfo){
            setUserInfo({ isAdmin: !userInfo.isAdmin })
        } else {
            setUserInfo({ isAdmin: false })
        }
    };    

    return(
        <HeaderOnly>
            <SContainer>
                <h2>User List</h2>
                <SearchInput />
                <br />
                <SecondaryButton onClick={onClickSwitch}>권한변경</SecondaryButton>
                <br />
                <SUserArea>{
                    users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))
                }</SUserArea>

            </SContainer>
        </HeaderOnly>
    )
}

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`

const SContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-tiems: center;
    padding: 24px;
`