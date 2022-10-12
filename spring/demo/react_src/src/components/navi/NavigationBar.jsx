import styled from 'styled-components';
import { Link, Outlet, BrowserRouter, useNavigate } from "react-router-dom"
import { useLogin } from '../../hooks/useLogin';
import { useLoginState } from '../../provider/AppProvider';
import { LangSelect } from '../select/LangSelect';
import { width } from '@mui/system';

export const NavigationBar = () => {
    const context = useLoginState();
    const navigate = useNavigate();

    const logout = () => {
        context.isLogin = false;
        navigate("/");
    }

    return (
        
            <nav style={{height: 70}}>
                <SliContainer>
                    <LangSelect />

                    <SliItem>
                        <Link to="/home">홈</Link>
                    </SliItem>

                    <SliItem>
                        <Link to="/todo">TODO</Link>
                    </SliItem>

                    {
                        !context.isLogin ? 
                        (<SliItem>
                            <Link to="/login">Login</Link>
                        </SliItem>)
                        :(
                        <SliItem>
                            <Link onClick={logout} to="/logout">{context.id} 님 Logout</Link>
                        </SliItem>
                        )
                    }
                    {/* <SliItem>
                        <Link to="/login">Login</Link>
                    </SliItem>

                    <SliItem>
                        <Link to="/logout">Logout</Link>
                    </SliItem> */}
                    
                        
                    
                </SliContainer>

                <Outlet />
            </nav>
        
    )
}

const SliItem = styled.li`
    > * {
        cursor: pointer;
        display: inline-block;
        height: 80%;
        color: #fff;
        text-decoration-line: none;
        background-color: #40514e;
        padding: 2px 25px;
        margin: 6px 10px;
        border: none;
        outline: none;
        border-radius: 7px;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
        text-align: center;
        vertical-align: middle;
    }
`

const SliContainer = styled.ul`
    display: flex;
    list-style-type: none;
`