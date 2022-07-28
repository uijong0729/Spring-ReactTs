import { FC } from "react";
import { User } from "./types/User";


type Props = {
    user: User;
}

export const UserProfile: FC<Props> = (props) => {
    const { user } = props;
    return (
        <dl>
            <dt>name</dt>
            <dd>{user.name}</dd>
            <dt>hobby</dt>
            {/* 배열의 각 요소 사이를 " / "로 이어붙인 스트링 */}
            <dd>
                {   // user.hobbies가 null이면 join을 호출하지 않음
                    // Optional chaining
                    user.hobbies?.join(" / ")
                }
            </dd>
        </dl>
    )
}