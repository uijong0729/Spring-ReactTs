const removeParentTags = (child) => {
    const deleteTarget = child.parentNode;
    deleteTarget.remove();
    return deleteTarget;
}

const onClickAdd = (param, parent) => {
    
    // 요소 생성
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    spanTag.innerHTML = param
    const buttonTagAdd = document.createElement("button");
    buttonTagAdd.innerText = "완료"
    buttonTagAdd.addEventListener("click", () => {
        let result = removeParentTags(buttonTagRemove);
        let buttons = result.getElementsByTagName("button");
        buttons[0].remove();
        buttons[0].innerText = "삭제"
        document.getElementById("todo-list-cancel").appendChild(result);
    });
    const buttonTagRemove = document.createElement("button");
    buttonTagRemove.innerText = "삭제"
    buttonTagRemove.addEventListener("click", () => {
        let result = removeParentTags(buttonTagRemove);
        console.log(result);
    });

    // 요소 추가
    liTag.appendChild(spanTag);
    liTag.appendChild(buttonTagAdd);
    liTag.appendChild(buttonTagRemove);
    console.log(parent);
    parent.appendChild(liTag);
}

document.getElementById("bt-add")
    .addEventListener("click", () => { 
        const todoList = document.getElementById("todo-list");
        const inputTag = document.getElementById("text-add");
        onClickAdd(inputTag.value, todoList);
        inputTag.value = "";
    });

