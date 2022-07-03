import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const { children } = props;
    const contextName = "Context Name"
    return (
        <UserContext.Provider value={{ contextName }}>
            { children }
        </UserContext.Provider>
    )
}