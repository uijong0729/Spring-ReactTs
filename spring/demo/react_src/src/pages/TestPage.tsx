
import { useTodos } from '../hooks/useTodos';
import { TodoDialog } from '../components/dialog/TodoDialog';
import { useState, useEffect } from 'react'
import BasicCard from '../components/card/BaseCard';
import styled from 'styled-components';

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
                {todoEntities.map((todos) => (
                    <BasicCard 
                        assignedUserId={todos.assignedUserId} 
                        text={todos.text} 
                        registrantId={todos.registrantId}
                        deadline={todos.deadline}
                        id={todos.id}
                        status={todos.status} />
                ))}
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid;
`