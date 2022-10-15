import styled from 'styled-components';
import { Link, Outlet, BrowserRouter, useNavigate } from "react-router-dom"
import { LangSelect } from '../select/LangSelect';
import { Constants } from '../../utils/Constants';
import { AuthContext } from '../../provider/AuthContext';
import { useContext } from 'react'

export const NavigationBar = () => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    
    // test code////////////
    const context = {
        lang: 0
    }
    /////////////////////

    const logout = () => {
        setAuthenticated(false);
        navigate("/");
    }

    return (
        
            <nav style={{height: 70}}>
                <SliContainer>
                    <LangSelect />

                    <SliItem>
                        <Link to="/home">{Constants.TEXT_HOME[context.lang]}</Link>
                    </SliItem>

                    <SliItem>
                        <Link to="/todo">{Constants.TEXT_TODO[context.lang]}</Link>
                    </SliItem>

                    
                    {
                        !authenticated ? 
                        (<SliItem>
                            <Link to="/login">{Constants.TEXT_LOGIN[context.lang]}</Link>
                        </SliItem>)
                        :(
                        <SliItem>
                            <Link onClick={logout} to="/logout">{context.id} {Constants.TEXT_LOGOUT[context.lang]}</Link>
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