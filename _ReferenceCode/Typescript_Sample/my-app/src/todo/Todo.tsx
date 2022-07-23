
type TodoType = {
    userId :number;
    title :string;
    completed? :boolean; // 필수 속성이 아닌 경우 변수명 뒤에 ?를 붙인다
}

export const Todo = (props :TodoType) => {
    // completed는 필수속성이 아니기 때문에 값지정이 없을경우 false를 설정해준다.
    const {title, userId, completed = false} = props;
    const completeMark = completed ? "[완]" : "[미]";
    
    return (
        <p>`${completeMark} title : ${title}, user : ${userId}`</p>
    )
};