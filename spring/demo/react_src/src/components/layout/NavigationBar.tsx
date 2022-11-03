import styled from 'styled-components';
import { Link, Outlet, BrowserRouter, useNavigate } from "react-router-dom"
import { LangSelect } from '../atoms/select/LangSelect';
import { Constants } from '../../utils/Constants';
import { AuthContext, LanguageContext } from '../../provider/AppContext';
import { useContext } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material';
import { justPost } from '../../utils/PostUtils';

export const NavigationBar = () => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    const { language, setLanguage } = useContext(LanguageContext);
    // const navigate = useNavigate();

    const logout = () => {
        setAuthenticated(false);
        justPost("/logout");
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, 
                height:'70px',
                padding: '8px 0',
                textAlign: 'center'}}>

            <AppBar 
                position="static" 
                color="default" 
                sx={{border: '1px solid gray'}}>
                    
                <Toolbar>
                    <SliContainer>
                        <LangSelect />

                        <SliItem>
                            <Link to="/home">{Constants.TEXT_HOME[language]}</Link>
                        </SliItem>

                        <SliItem>
                            <Link to="/todo">{Constants.TEXT_TODO[language]}</Link>
                        </SliItem>

                        <SliItem>
                                <Link onClick={logout} to="/logout">{Constants.TEXT_LOGOUT[language]}</Link>
                        </SliItem>
                        {
                            // !authenticated ? 
                            // (<SliItem>
                            //     <Link to="/login">{Constants.TEXT_LOGIN[language]}</Link>
                            // </SliItem>)
                            // :(
                            // <SliItem>
                            //     <Link onClick={logout} to="/logout">{Constants.TEXT_LOGOUT[language]}</Link>
                            // </SliItem>
                            // )
                        }    
                    </SliContainer>

                    <Outlet />
                </Toolbar>
            </AppBar>
            </Box>
            
        </>
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