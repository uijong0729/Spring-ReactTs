// 커스텀 훅은 접두어에 use를 붙이는 것이 관례

import axios from "axios";
import { FC, useState } from "react";
import { UserEntity } from "./api/UserEntity";

// 모든 유저 일람을 취득하는 커스텀 훅
export const useLogin = () => {
    const [userEntity, setUserEntity] = useState<UserEntity>();
    
    const goLogin = (props: UserEntity) => {
      axios.post<UserEntity>("http://localhost:8080/goLogin", {
          id: props.id,
          pass: props.pass
      }, {
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        const res :UserEntity = {
          id: response.data.id,
          pass: response.data.pass
        };
        
        setUserEntity(res);
      })
      // 에러가 발생할 경우
      .catch((error)=>{
        console.log(error);
      })
    }

    // 다른 곳에서 사용할 수 있도록 반환
    return {
      userEntity, goLogin
    };
};