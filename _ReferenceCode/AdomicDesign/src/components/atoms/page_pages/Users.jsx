import styled from "styled-components"
import { HeaderOnly } from './../page_template/HeaderOnly';
import { SearchInput } from './../molecules/SearchInput';
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from 'react-router-dom';

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
    const { state } = useLocation();
    const isAdmin = state ? state.isAdmin : false;

    return(
        <HeaderOnly>
            <SContainer>
                <h2>User List</h2>
                <SearchInput />

                <SUserArea>{
                    users.map((user) => (
                        <UserCard key={user.id} user={user} isAdmin={isAdmin}/>
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