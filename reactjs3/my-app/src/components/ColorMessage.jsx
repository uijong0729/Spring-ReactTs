
// export const ColorMessage 도 가능
// 해당 함수만 export 해서 사용하려면 app.jsx에서 import {ColorMessage} from "./components/ColorMessage" 를 맨 위에 추가한다.
const ColorMessage = (props) => {
    // 분할대입으로 점 접근으로 작성하는 타이핑의 피로를 줄임
    const {color, children} = props;

    console.log(props);
    const contentStyleRed = {
        // color: props.color,
        color: color,
        fontSize: '18px'
      };

    return (
        // <p style={contentStyleRed}>{props.children}</p>
        <p style={contentStyleRed}>{children}</p>
    );
}

export default ColorMessage;