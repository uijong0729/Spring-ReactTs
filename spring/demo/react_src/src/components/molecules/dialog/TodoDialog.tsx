import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTodos } from '../../../hooks/useTodos';
import styled from 'styled-components';
import { LanguageContext } from '../../../provider/AppContext';
import { Constants } from '../../../utils/Constants';


export const TodoDialog = () => {
  const [open, setOpen] = React.useState(false);
  const { addTodo } = useTodos();
  const { language, setLanguage } = React.useContext(LanguageContext);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const deadline: Date = new Date((document.getElementById("todoDeadline") as HTMLInputElement).value);
    const inputValue: string = (document.getElementById("todoText") as HTMLInputElement).value;
    addTodo(inputValue, deadline);
    setOpen(false);
  };

  return (
    <DialogContainer>
      <Button variant="outlined" onClick={handleClickOpen}>
        {Constants.TEXT_ADD_TODO[language]}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Contents
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todoDeadline"
            type="date"
            fullWidth
            required
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="todoText"
            placeholder="Todo를 입력"
            type="text"
            fullWidth
            required
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button id="id_add" onClick={handleSubmit}>OK</Button>
        </DialogActions>
      </Dialog>
    </DialogContainer>
  );
}

const DialogContainer = styled.div`
    margin: 12px;
`