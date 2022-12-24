import { UserEntity } from "../../../hooks/api/UserEntity";
import { useLogin } from "../../../hooks/useLogin";
import { BlueButton } from "../../atoms/button/BlueButton";

export const SignUpInput = () => {
    const { addUser } = useLogin();

    const onClickSignUp = () :void  => {
        const id = document.getElementById('username') as HTMLInputElement;
        const pass = document.getElementById('password') as HTMLInputElement;

        const entity :UserEntity = {
            username: id.value,
            password: pass.value
        }

        addUser(entity);
    }
    

    return(
        <>
            <dl>
                <dt>ID</dt>
                <dd>
                    <input id="username" type="text" placeholder="아이디를 입력"/>
                </dd>
                <dt>PASSWORD</dt>
                <dd>
                    <input id="password" type="password" placeholder="비밀번호를 입력" />
                </dd>
            </dl>
            <BlueButton onClick={onClickSignUp}>만들기</BlueButton>
        </>
    )
}