enum TodoStatus {
    Imcompleted = "IMCOMPLETED",
    Completed = "COMPLETED",
    Deleted = "DELETED"
}

function isCompleted(st:TodoStatus) {
    let result :boolean = false;
    
    if (st == TodoStatus.Completed)
        result = true;

    return result;
}

function isCompletedString(st:string) {
    let result :boolean = false;
    
    if (st == TodoStatus.Completed)
        result = true;

    return result;
}


console.log(isCompleted(TodoStatus.Completed));
console.log(isCompletedString("COMPLETED"));