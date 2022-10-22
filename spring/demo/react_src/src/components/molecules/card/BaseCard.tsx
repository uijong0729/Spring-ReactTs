import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TodoEntity } from '../../../hooks/api/TodoEntity';
import { useTodos } from '../../../hooks/useTodos';
import { Constants } from '../../../utils/Constants';
import { LanguageContext } from '../../../provider/AppContext';

export default function BasicCard(props: TodoEntity) {
  const { id, text, status, registrantId, assignedUserId, deadline } = props;
  const newDeadline = deadline?.toString().substring(0, 10)
  const { deleteTodo, completeTodo } = useTodos();
  const { language, setLanguage } = React.useContext(LanguageContext);

  // 완료 
  const sCompleteTodo = () => {
    completeTodo(id).then(() => {
      window.location.reload();
    });
  }
  // 삭제
  const sDeleteTodo = () => {
    const ok :boolean = window.confirm(Constants.MSG_DELETE_CONFIRM[language]);
    if (ok) {
      deleteTodo(id).then(() => {
        window.location.reload();
      });
    }
  }

  return (
    <Card sx={
      {
        minWidth: 350,
        padding: '18px', 
        margin: '15px 8px 15px 8px',
        boxShadow: '5px 7px #888888', 
        border: '1px solid'
      }
    }>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`${Constants.TEXT_END_DATE[language]} : ${newDeadline} / ${Constants.TEXT_TODO_STATE[language]} : ${status}`}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {text}
        </Typography>
        <Typography variant="body2">
          {registrantId}
        </Typography>
        <Typography variant="body2">
          {assignedUserId}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={sCompleteTodo} size="small">${Constants.TEXT_BT_COMPLETE[language]}</Button>
        <Button onClick={sDeleteTodo} size="small">${Constants.TEXT_BT_DELETE[language]}</Button>
      </CardActions>
    </Card>
  );
}