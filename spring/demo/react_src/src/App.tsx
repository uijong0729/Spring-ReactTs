import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BodyContainer } from './components/layout/BodyContainer';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routers/AppRoutes';
import { AuthContext, LanguageContext } from './provider/AppContext';
import { useState } from 'react';

function App() {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [language, setLanguage] = useState<number>(0);

    return(
        <div className='App'>
        <BrowserRouter>

            <AuthContext.Provider value={{authenticated, setAuthenticated}}>
                <LanguageContext.Provider value={{language, setLanguage}}>
                    
                        <Header />
                        <BodyContainer>
                            <AppRoutes />
                        </BodyContainer>
                        
                        <Footer />
                    
                </LanguageContext.Provider>
            </AuthContext.Provider>
            
        </BrowserRouter>
        </div>
    );
}


export default App;