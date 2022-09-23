import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialProps } from "../types/ComponentType";

export const BaseDialog = (props :DialProps) => {
  const [open, setOpen] = React.useState(false);
  const { onSubmit, title, contents, buttonName, field  } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onSubmit();
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {contents}
          </DialogContentText>
                    
          <TextField
            autoFocus
            margin={field.margin}
            id={field.id}
            label={field.label}
            type={field.type}
            fullWidth
            variant={field.variant}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}