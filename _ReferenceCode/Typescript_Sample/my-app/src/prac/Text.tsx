import { FC } from "react";

type Props = {
    color: string;
    fontSize: string;
    children: string;
}

// functional component : 변수가 아니라 함수컴포넌트라는 것읆 명시함 FC
export const Text: FC<Props> = (props :Props) => {
    const { color, fontSize, children } = props;
    return(
        <p style={ {color, fontSize} }>{children}</p>
    )
}