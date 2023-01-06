
import { useTodos } from '../../hooks/useTodos';
import { TodoDialog } from '../molecules/dialog/TodoDialog';

export const TodoPage = () => {
    const { TodoComponent } = useTodos();

    return (
        <>
            <TodoDialog />
            <TodoComponent />
        </>
    )
}