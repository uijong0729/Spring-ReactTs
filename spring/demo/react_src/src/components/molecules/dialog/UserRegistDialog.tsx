import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useLogin } from '../../../hooks/useLogin';
import { UserEntity } from '../../../hooks/api/UserEntity';
import { LanguageContext } from '../../../provider/AppContext';
import { Constants } from '../../../utils/Constants';

// # ref
// https://mui.com/material-ui/react-button/
export const UserRegistDialog = () => {
  const [open, setOpen] = React.useState(false);
  const { addUser } = useLogin();
  const { language, setLanguage } = React.useContext(LanguageContext);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const inputId: string = (document.getElementById("userId") as HTMLInputElement).value;
    const inputPass: string = (document.getElementById("userPass") as HTMLInputElement).value;

    const userEntity :UserEntity = {
      id: inputId, 
      pass: inputPass,
      groupId: ''
    }
    
    addUser(userEntity).then(() => {
      window.location.reload();
    });
    setOpen(false);
  };

  return (
    <DialogContainer>
      <Button variant="outlined" onClick={handleClickOpen}>
        {Constants.TEXT_BT_SIGNUP[language]}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{Constants.TEXT_BT_SIGNUP[language]}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="userId"
            type="text"
            placeholder="ID"
            fullWidth
            required
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="userPass"
            placeholder="Password"
            type="password"
            fullWidth
            required
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button id="id_add" onClick={handleSubmit}>Register</Button>
        </DialogActions>
      </Dialog>
    </DialogContainer>
  );
}

const DialogContainer = styled.div`
    margin: 12px;
    display: inline;
`