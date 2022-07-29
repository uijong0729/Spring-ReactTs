import axios from "axios"
import { FC, useState } from "react";
import { tUserApi } from "../Types/api/User";
import { UserProfile } from "../Types/UserProfile";
import { UserCard } from "./UserCard";


export const GetDataButton: FC = () => {
    const [UserProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
    const [isLoading, setIsLoading] = useState(false); // 초기치 false
    const [isError, setIsError] = useState(false); // 초기치 false


    const onClickFetchUser = () => {
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
    };

    return (
        <>
            <button onClick={onClickFetchUser}>Get Users Data</button>
            <br />
            { isError ? (
                <p>데이터 취득 에러</p>
            ) : (
                isLoading ? (
                    <p>로딩 중</p>
                ) : (
                    <>
                        {UserProfiles.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </>
                )
            ) }
        </>
    )
}