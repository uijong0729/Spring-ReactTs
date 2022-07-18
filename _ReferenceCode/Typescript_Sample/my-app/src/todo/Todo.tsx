
export const Todo = (props) => {
    const {title, userId} = props;

    return (
        <p>`title : ${title}, user : ${userId}`</p>
    )
};