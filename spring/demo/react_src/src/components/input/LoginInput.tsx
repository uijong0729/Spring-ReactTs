import { UserEntity } from "../../hooks/api/UserEntity";
import { useLogin } from "../../hooks/useLogin";
import { GreenButton } from "../button/GreenButton";

export const LoginInput = () => {
    const { userEntity, goLogin } = useLogin();
    // const btLogin = document.getElementById('btLogin') as HTMLButtonElement
    const onClickLogin = () => {
        const id = document.getElementById('id') as HTMLInputElement;
        const pass = document.getElementById('pass') as HTMLInputElement;

        const entity :UserEntity = {
            id: id.value,
            pass: pass.value
        }
        
        goLogin(entity);
    }
    // btLogin?.addEventListener('click', onClickLogin);

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
        </>
    )
}