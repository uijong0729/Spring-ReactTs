import { NavigationBar } from './components/navi/NavigationBar';
import { Home } from './pages/Home';

export const App = () => {
    return(
        <div>
            <Home/>
            <NavigationBar/>
        </div>
    )
}