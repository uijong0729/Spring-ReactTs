
import { useTodos } from '../../hooks/useTodos';
import { TodoDialog } from '../molecules/dialog/TodoDialog';

export const TestPage = () => {
    const { TodoComponent } = useTodos();

    return (
        <>
            <TodoDialog />
            <TodoComponent />
        </>
    )
}