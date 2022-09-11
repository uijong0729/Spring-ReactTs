import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BodyContainer } from './components/layout/BodyContainer';
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routers/AppRoutes';
import { AppProvider } from './provider/AppProvider';
import { NavigationBar } from './components/navi/NavigationBar';

function App() {
    return(
        <div className='App'>
        <BrowserRouter>
            <AppProvider>
                
            <Header />
                <BodyContainer>
                    <AppRoutes />
                </BodyContainer>
                
                <Footer />
            </AppProvider>
        </BrowserRouter>
        </div>
    );
}


export default App;