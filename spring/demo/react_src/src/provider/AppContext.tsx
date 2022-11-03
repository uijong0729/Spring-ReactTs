import {createContext} from 'react';
import { TodoEntity } from '../hooks/api/TodoEntity';

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