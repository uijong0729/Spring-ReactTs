
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