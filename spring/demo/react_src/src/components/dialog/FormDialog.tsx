import TextField, { TextFieldProps } from '@mui/material/TextField';
import { BaseDialog } from './BaseDialog';
import { DialogProps, DialProps } from "../types/ComponentType";
import styled from 'styled-components';

export const FormDialog = (props: DialogProps) => {
  const field :TextFieldProps = {
      autoFocus: true,
      margin:"dense",
      id:"name",
      placeholder:"Todo를 입력",
      type:"text",
      fullWidth:true,
      variant:"standard"
  }

  return(
 
    <DialogContainer>
      <BaseDialog field={field} buttonName={props.buttonName} contents={props.contents} onSubmit={props.onSubmit} title={props.title} />
  </DialogContainer>
  )
}

const DialogContainer = styled.div`
    margin: 12px;
`