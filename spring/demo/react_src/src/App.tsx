import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BodyContainer } from './components/layout/BodyContainer';
import { Home } from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routers/AppRoutes';
import { NavigationBar } from './components/navi/NavigationBar';
import { AuthContext } from './provider/AuthContext';
import { useState } from 'react';

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    return(
        <div className='App'>
        <BrowserRouter>

            <AuthContext.Provider value={{authenticated, setAuthenticated}}>
                <Header />
                <BodyContainer>
                    <AppRoutes />
                </BodyContainer>
                
                <Footer />
            </AuthContext.Provider>
            
        </BrowserRouter>
        </div>
    );
}


export default App;