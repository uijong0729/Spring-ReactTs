
import { useTodos } from '../../hooks/useTodos';
import { TodoDialog } from '../molecules/dialog/TodoDialog';
import { useEffect } from 'react'
import BasicCard from '../molecules/card/BaseCard';
import styled from 'styled-components';
import { TodoStatus } from '../../hooks/api/TodoEntity';

export const TestPage = () => {
    const { todoEntities, getAllTodos } = useTodos();
    useEffect(() => {
        const fetchData = async () => {
            getAllTodos();
        }
        fetchData();
     }, [])

    return (
        <>
            <TodoDialog />
            <CardContainer className="card_contianer">
                {
                    todoEntities.filter((todos) => {
                        return todos.status === TodoStatus.IMCOMPLETED
                    }).map((todos) => (
                        <BasicCard 
                            assignedUserId={todos.assignedUserId} 
                            text={todos.text} 
                            registrantId={todos.registrantId}
                            deadline={todos.deadline}
                            id={todos.id}
                            status={todos.status} />
                    ))
                }
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid;
`