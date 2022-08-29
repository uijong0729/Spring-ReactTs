import { createContext, ReactNode } from "react";

type Props = {
    children?: ReactNode;
}

export const AppContext = createContext({});

export const AppProvider = (props :Props) => {
    const { children } = props;
    const contextName = "Context Name"
    return (
        <AppContext.Provider value={{ contextName }}>
            { children }
        </AppContext.Provider>
    )
}