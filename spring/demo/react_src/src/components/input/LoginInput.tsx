import { UserEntity } from "../../hooks/api/UserEntity";
import { useLogin } from "../../hooks/useLogin";
import { GreenButton } from "../button/GreenButton";
import { BlueButton } from "../button/BlueButton";
import { ReactElement } from "react";

export const LoginInput = () => {
    const { userEntity, goLogin } = useLogin();
    
    const onClickLogin = () :void => {
        const id = document.getElementById('id') as HTMLInputElement;
        const pass = document.getElementById('pass') as HTMLInputElement;

        const entity :UserEntity = {
            id: id.value,
            pass: pass.value,
            groupId: ''
        }
        
        goLogin(entity);
    }

    const onClickSignUp = () :void  => {
        console.log('sign up');
    }
    

    return(
        <>
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
            
            <GreenButton onClick={onClickLogin}>SIGN IN</GreenButton>
            <BlueButton onClick={onClickSignUp}>SIGN UP</BlueButton>
        </>
    )
}