import { FC } from "react";
import { UserCard } from "./UserCard";
import { useAllUsers } from "./../hooks/useAllUsers"

export const GetDataButton: FC = () => {
    // 커스텀 훅 사용 예
    const {getUsers, userProfiles, isLoading, isError} = useAllUsers();
    const onClickFetchUser = () => getUsers();

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
                        {userProfiles.map((user) => (
                            <UserCard key={user.id} user={user} />
                        ))}
                    </>
                )
            ) }
        </>
    )
}