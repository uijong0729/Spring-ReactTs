import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = (props) => {
    const { children } = props;
    const contextName = "Context Name"
    return (
        <AppContext.Provider value={{ contextName }}>
            { children }
        </AppContext.Provider>
    )
}