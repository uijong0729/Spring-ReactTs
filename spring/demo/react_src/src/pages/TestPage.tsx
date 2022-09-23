
import { useTodos } from '../hooks/useTodos';
import { FormDialog } from '../components/dialog/FormDialog';

export const TestPage = () => {
    const { todoEntities, getAllTodos, addTodo} = useTodos();    
    return (
        <div>
            <FormDialog title="ToDo" contents="contents" buttonName="ToDo 추가" onSubmit={addTodo} />
            {todoEntities.map((todos) => (
                <p>{todos.id} {todos.text} {todos.text} {todos.assignedUserId} {todos.registrantId}</p>
            ))}
        </div>
    )
}