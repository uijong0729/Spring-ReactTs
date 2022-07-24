import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routers/AppRoutes';
import { AppProvider } from './provider/AppProvider';

function App() {
    return(
        <div className='App'>
        <BrowserRouter>
            <AppProvider>
                <Home/>

                <Header />

                <AppRoutes />

                <Footer />
            </AppProvider>
        </BrowserRouter>
        </div>
    );
}


export default App;