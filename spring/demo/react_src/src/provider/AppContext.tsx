import {createContext} from 'react';

export const AuthContext = createContext({
    authenticated: false,
    setAuthenticated: (auth :boolean) => {}
});

export const LanguageContext = createContext(
    {
        language: 0,
        setLanguage: (lang :number) => {}
    }
);