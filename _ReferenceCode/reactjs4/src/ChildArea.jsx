import { memo } from "react";

const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
}
// 렌더링의 조건
// - state, props가 갱신된 컴포넌트는 다시 렌더링된다.
// - 다시 렌더링된 컴포넌트의 자식요소도 다시 렌더링된다.
// - memo로 감싸면 props가 갱신되지 않는한 재렌더링을 수행하지 않는다.
// 너무 작은 요소는 memo로 감쌀 필요는 없지만 대부분의 컴포넌트는 memo로 감싸는 것이 좋다.
export const ChildArea = memo((props) => {
    const {open, onClickClose} = props;
    // 렌더링 부하 확인용 2000개의 배열
    const data = [...Array(2000).keys()];
    data.forEach(()=>{
      console.log("ChildArea가 렌더링 되었다.")
    })

    return (
        <>
        {/* 재렌더링 예제 */}
        {open ? (
          <div style={style}>
            <p>child</p>
            <button onClick={onClickClose}>닫는다</button>
          </div>
        ) : null}
        </>
    )
});