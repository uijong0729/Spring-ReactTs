import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTodos } from '../../hooks/useTodos';
import styled from 'styled-components';
import { useLogin } from '../../hooks/useLogin';
import { UserEntity } from '../../hooks/api/UserEntity';


export const UserRegistDialog = () => {
  const [open, setOpen] = React.useState(false);
  const { addUser } = useLogin();
  
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
        회원가입
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>회원가입</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="userId"
            type="text"
            placeholder="ID를 입력"
            fullWidth
            required
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="userPass"
            placeholder="비밀번호를 입력"
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