import { LoginInput } from '../molecules/input/LoginInput';
import { UserRegistDialog } from "../molecules/dialog/UserRegistDialog";
import { UserEntity } from "../../hooks/api/UserEntity";
import { useLogin } from "../../hooks/useLogin";
import { Alert, Button } from '@mui/material';
import { Constants } from '../../utils/Constants';
import { LanguageContext } from '../../provider/AppContext';
import { useContext } from 'react';
import { CenterContainer } from '../layout/CenterContainer';

export const LoginPage = () => {
    const { userEntity, goLogin } = useLogin();
    const { language, setLanguage } = useContext(LanguageContext);
    
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

    return (
        <>
            <CenterContainer>
                <div>
                    <Alert severity="info">{Constants.MSG_WELCOME[language]}</Alert>
                    <LoginInput />
                    <Button variant="contained" color="success" onClick={onClickLogin}>
                        {Constants.TEXT_BT_LOGIN[language]}
                    </Button>
                    <UserRegistDialog />
                </div>
            </CenterContainer>
        </>
    )
}