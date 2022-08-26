import styled from "styled-components"
import { Button } from "react-bootstrap"

export const LoginInput = () => {
    return(
        <form action="login">
            <dl>
                <dt>ID</dt>
                <dd>
                    <input id="id" type="text" />
                </dd>
                <dt>PASSWORD</dt>
                <dd>
                    <input id="pass" type="password" />
                </dd>
            </dl>
            <Button type="submit" variant="primary">SIGN IN</Button>
        </form>
    )
}