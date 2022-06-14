import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { App } from './App';

export const AppRouter = () => {
    return(
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />}/>
             {/* Todo Page */}
            <Route path="/app" element={<App />}/>
        </Routes>
    )
}