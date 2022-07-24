import { FC } from "react";
import { TodoType } from "../types/DefTodo";

// functional component : 변수가 아니라 함수컴포넌트라는 것읆 명시함 FC
export const Todo :FC<Omit<TodoType, "id">> = (
    // Pick : 타입을 추출, 프로퍼티명을 지정하면 해당 속성만 가져온다.
    // props :Pick<TodoType, "userId" | "title" | "completed">
    // Omit : 타입을 제외, 프로퍼티명을 지정하면 해당 속성만 제외해서 가져온다.
    props :Omit<TodoType, "id">
    ) => {
    // completed는 필수속성이 아니기 때문에 값지정이 없을경우 false를 설정해준다.
    const {title, userId, completed = false} = props;
    const completeMark = completed ? "[완]" : "[미]";

    return (
        <p>`${completeMark} title : ${title}, user : ${userId}`</p>
    )
};