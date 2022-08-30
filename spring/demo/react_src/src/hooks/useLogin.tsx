// 커스텀 훅은 접두어에 use를 붙이는 것이 관례
import axios from "axios";
import { FC, useState } from "react";
import { UserEntity } from "./api/UserEntity";

// 모든 유저 일람을 취득하는 커스텀 훅
export const useLogin = () => {
    const [userEntity, setUserEntity] = useState<UserEntity>();
    const env = "http://localhost:8080";
    
    // 로그인
    const goLogin = (props: UserEntity) => {
      axios.post<UserEntity>(`${env}/goLogin`, {
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

    // 회원가입
    const addUser = (param :UserEntity) :void => {
      axios.post<UserEntity>(`${env}/signup`, {
          id: param.id,
          pass: param.pass
      }, {
        headers: {
            'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log(response);
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