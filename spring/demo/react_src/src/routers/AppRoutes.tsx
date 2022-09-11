import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/LoginPage';
import { TestPage } from '../pages/TestPage';

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path=''>
                {/* Home Page */}
                <Route path="/home" element={<Home />}/>
                <Route path="/todo" element={<TestPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/logout" element={<Navigate to="/home"/>}/>
            </Route>
            
            {/* 404 페이지 */}
            <Route path='*' element={<Home/>}/>
        </Routes>
    )
}