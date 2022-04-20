/**
 * var의 변수선언
 */
// 종래의 변수 선언은 var를 사용
var val1 = "var";
console.log(val1);

// // var변수는 덮어쓰기 가능
val1 = "other var";
console.log(val1);

// // var변수는 재선언 가능
var val1 = "new var";
console.log(val1);

/**
 * let의 변수선언
 */
let val2 = "let";
console.log(val2);

// let 변수는 덮어쓰기 가능
val2 = "other let";
console.log(val2);

// let 변수는 재선언 불가
// let val2 = "new let";
// console.log(val2);

/**
 * const의 변수선언
 */
const val3 = "const";

// const 변수는 덮어쓰기 불가
// val3 = "other const";

// const 변수는 재선언 불가
// const val3 = "new const";

// const의 오브젝트는 속성을 바꿀수 있을까?
const val4 = {
  name: "name",
  age: 28
};
console.log(val4);

// const로 정의해도 오브젝트 속성은 바꿀 수 있다
val4.name = "new name";
val4.age = 5;
console.log(val4);

// const 오브젝트라도 새로운 속성을 추가할 수도 있다.
val4.address = "hiroshima";

// 배열도 내용을 바꾸거나 추가할 수 있다.
const val5 = ["dog", "cat"];
console.log(val5);

// 변경
val5[0] = "bird";
console.log(val5);

// 추가
val5.push("monkey");
console.log(val5);

// 맨 뒤 속성 제거
val5.pop();