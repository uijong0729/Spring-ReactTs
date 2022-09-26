
import { useTodos } from '../hooks/useTodos';
import { TodoDialog } from '../components/dialog/TodoDialog';
import { useState, useEffect } from 'react'
import BasicCard from '../components/card/BaseCard';

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
            {todoEntities.map((todos) => (
                <BasicCard 
                    assignedUserId={todos.assignedUserId} 
                    text={todos.text} 
                    registrantId={todos.registrantId}
                    id={todos.id}
                    status={todos.status} />
            ))}
        </>
    )
}