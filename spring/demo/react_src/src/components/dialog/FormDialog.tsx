import TextField from '@mui/material/TextField';
import { BaseDialog } from './BaseDialog';
import { DialogProps } from "../types/ComponentType";

export const FormDialog = (props: DialogProps) => {
  return(
    <BaseDialog field={
      (
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"/>
      )
  } buttonName={props.buttonName} contents={props.contents} onSubmit={props.onSubmit} title={props.title} />
  )
}