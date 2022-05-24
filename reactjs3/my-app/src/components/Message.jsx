import React from "react";

export const Message = (props) => {
    const {todos} = props

    return (
        <>
        {/* 좌항이 True인 경우 우항이 실행된다 */}
        { todos.length > 4 &&         
        <p style={{color: 'red'}}>
            등록가능한 상한을 초과했습니다.
        </p>}
        </>
    )
};