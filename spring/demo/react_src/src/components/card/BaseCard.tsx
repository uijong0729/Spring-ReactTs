import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TodoEntity } from '../../hooks/api/TodoEntity';

export default function BasicCard(props: TodoEntity) {
  const { text, status, registrantId, assignedUserId } = props;

  return (
        <Card sx={{ minWidth: 255, margin: '5px', padding: '18px', boxShadow: '5px 7px #888888', border: '1px solid' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {status}
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
            <Button size="small">완료하기</Button>
        </CardActions>
        </Card>
  );
}