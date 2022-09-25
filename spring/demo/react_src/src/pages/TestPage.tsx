
import { useTodos } from '../hooks/useTodos';
import { TodoDialog } from '../components/dialog/TodoDialog';
import { useState, useEffect } from 'react'

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
                <p>{todos.id} {todos.text} {todos.text} {todos.assignedUserId} {todos.registrantId}</p>
            ))}
        </>
    )
}