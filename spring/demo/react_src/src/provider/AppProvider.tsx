import { createContext, ReactNode, useState, useReducer, Dispatch, useContext } from "react";

type Login = {
    isLogin :boolean;
    id :string;
}

type LoginAction =   
| { type: 0; isLogin :boolean; }
| { type: 1; id :string; }

type Props = {
    children?: ReactNode;
}

type ActionDispatch = Dispatch<LoginAction>;

export const LoginContext = createContext<Login | null>(null);
export const LoginDispatchContext = createContext<ActionDispatch | null>(null);

// 리듀서
function reducer(state: Login, action: LoginAction): Login {
    switch (action.type) {
      case 0:
        return {
          ...state,
          isLogin: action.isLogin
        };
      case 1:
        return {
          ...state,
          id: action.id
        };
      default:
        throw new Error('Unhandled action');
    }
  }

export const AppProvider = (props :Props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, {
        isLogin: false,
        id: ''
      });
    
    return (
        <LoginContext.Provider value={ state }>
            <LoginDispatchContext.Provider value={dispatch}>
            { children }
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

export function useLoginState() {
    const state = useContext(LoginContext);
    if (!state) throw new Error('Cannot find Provider'); // 유효하지 않을땐 에러를 발생
    return state;
  }
  
  export function useLoginStateDispatch() {
    const dispatch = useContext(LoginDispatchContext);
    if (!dispatch) throw new Error('Cannot find Provider'); // 유효하지 않을땐 에러를 발생
    return dispatch;
  }