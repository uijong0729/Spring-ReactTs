import { Link } from "react-router-dom"
import styled from "styled-components"
import { NavigationBar } from "../navi/NavigationBar"

export const Header = () => {
    return (
        <SHeader>
            <NavigationBar />
        </SHeader>
    )
}

const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`

const SLink = styled(Link)`
    margin: 0 8px;
`