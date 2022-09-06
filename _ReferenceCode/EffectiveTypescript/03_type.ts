// 일반적으로 never는 늘 예외를 던지는 함수
function fnc(msg :string): never {
    throw new Error(msg);
}
//console.log(fnc("todo"));


// union (인수 타입을 유도리있게 받을 수 있음)
function add(num1 :number|string, num2 :number|string){
    return `${num1} + ${num2}`;
}
console.log(add("todo1", "todo2"));
console.log(add(1, 2));
console.log(add("todo", 1));