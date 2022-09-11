import styled from 'styled-components';
import { Link, Outlet, BrowserRouter } from "react-router-dom"

export const NavigationBar = () => {
    return (
        
            <nav>
                <SliContainer>
                    <SliItem>
                        <Link to="/home">홈</Link>
                    </SliItem>

                    <SliItem>
                        <Link to="/todo">TODO</Link>
                    </SliItem>

                    <SliItem>
                        <Link to="/login">Login</Link>
                    </SliItem>

                    <SliItem>
                        <Link to="/logout">Logout</Link>
                    </SliItem>

                </SliContainer>

                <Outlet />
            </nav>
        
    )
}

const NoButton = styled.button`
    all: unset;
`

const SliItem = styled.li`
    > * {
        cursor: pointer;
        color: #fff;
        background-color: #40514e;
        padding: 6px 24px;
        margin: 2px 8px;
        border: none;
        outline: none;
        border-radius: 9999px;
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