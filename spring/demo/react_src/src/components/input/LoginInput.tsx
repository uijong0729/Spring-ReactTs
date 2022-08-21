import styled from "styled-components"
import { Button } from "react-bootstrap"

export const LoginInput = () => {
    return(
        <form action="login">
            <dl>
                <dt>ID</dt>
                <dd>
                    <input type="text" />
                </dd>
                <dt>PASSWORD</dt>
                <dd>
                    <input type="password" />
                </dd>
            </dl>
            <Button variant="primary">SIGN IN</Button>
        </form>
    )
}