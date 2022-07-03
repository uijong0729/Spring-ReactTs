import { createContext } from "react";

export const UserContext = createContext({});

// 예 : UserIconWithName.jsx쪽으로 값 전달 
export const UserProvider = (props) => {
    const { children } = props;
    const contextName = "Context Name"
    return (
        <UserContext.Provider value={{ contextName }}>
            { children }
        </UserContext.Provider>
    )
}