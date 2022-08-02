// 커스텀 훅은 접두어에 use를 붙이는 것이 관례

import axios from "axios";
import { useState } from "react";
import { UserProfile } from "./../Types/UserProfile"
import { tUserApi } from "./../Types/api/User"

// 모든 유저 일람을 취득하는 커스텀 훅
export const useAllUsers = () => {
    // states
    const [UserProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
    const [isLoading, setIsLoading] = useState(false); // 초기치 false
    const [isError, setIsError] = useState(false); // 초기치 false

    // axios를 호출해 state를 갱신
    const getUsers = () => {
        setIsLoading(true);
        setIsError(false);

        axios.get<Array<tUserApi>>("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const data:Array<UserProfile> = response.data.map((user) => ({
                        id: user.id,
                        name: `${user.name}(${user.username})`,
                        email: user.email,
                        address: `${user.address.city}${user.address.suite}${user.address.street}`
                }));
                // console.log(data);
                setUserProfiles(data);
                // console.log(UserProfiles);
            }).catch((err) => {
                setIsError(true);
            }).finally(() => {
                setIsLoading(false);
            })
    }

    // 다른 곳에서 사용할 수 있도록 반환
    return {
        getUsers, UserProfiles, isLoading, isError
    };
};