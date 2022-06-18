import { Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home';
import { Todo } from '../pages/Todo';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path=''>
                {/* Home Page */}
                <Route path="/home" element={<Home />}/>
                {/* Todo Page */}
                <Route path="/todo" element={<Todo />}/>
            </Route>
        </Routes>
    )
}