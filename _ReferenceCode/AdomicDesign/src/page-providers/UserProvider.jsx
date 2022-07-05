import { createContext, useState } from "react";

export const UserContext = createContext({});

// 예 : UserIconWithName.jsx쪽으로 값 전달 
export const UserProvider = (props) => {
    const { children } = props;
    const [userInfo, setUserInfo] = useState();

    // useState를 사용하므로 userInfo가 갱신되면 모든 페이지가 다시 렌더링된다.
    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            { children }
        </UserContext.Provider>
    )
}