///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 확장 프로그램 Code Runner 설치 후, Ctrl + Alt + N을 눌러 테스트 실행
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 템플릿 문자열 ES2015
 */
const name = "john";
const age = 33;

// my name is [name], my age is [age]
// ES2015이전 종래의 방법
const msg1 = "my name is " + name + ", my age is " + age;
console.log(msg1);
// ES2015이후 템플릿 문자열
const msg2 = `my name is ${name}, my age is ${age}`;
console.log(msg2);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 화살표 함수 ES2015
 */
// ES2015이전 종래의 함수
const func1 = function(str) {
  return `str : ${str}`;
}
console.log(func1("function test"));

// ES2015이후 화살표함수
const func2 = (str) => {
  return `arrow str : ${str}`
}
console.log(func2("function test2"))

const func3 = str => {
  return `arrow str : ${str}`
}
console.log(func3("function test3"))

//한 줄 짜리는 return 생략
const func4 = (str) => `single line function : ${str}`;
console.log(func4("function test3"))

// 함수 작성 예
const sum = (a, b) => a + b;
console.log(sum(15, 33));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 분할대입 ES2015
 */
const myProfile = {
  myName : "abc",
  myAge : 38
};

// 오브젝트에서 속성을 추출
const { myName, myAge } = myProfile;                              // 분할대입 부분
const msg3 = `my name is ${myName} and my age is ${myAge} years`; // 분할대입 활용부분
console.log(msg3);

// 배열에서의 분할대입
const myArray = ['aabb', 28];
// 순서대로 받아들임
const [nameFromArray, nameFromAge] = myArray;                                 // 분할대입 부분
const msg4 = `my name is ${nameFromArray} and my age is ${nameFromAge} years`;// 분할대입 활용부분
console.log(msg4);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 디폴트 값, 인수 등
 */
const sayHello = (name) => console.log(`hello, my name is ${name}`);
sayHello("EUIJONG");
sayHello();         // 변수에 아무것도 없으면 : undefined

const sayHello2 = (name = "default") => console.log(`hello, my name is ${name}`);
sayHello2();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * 스플릿 구문 ... 
 */
// 1. 배열의 전개 : 배열의 내용을 순서대로 전개해 처리
const arr1 = [1, 2];
console.log(arr1);    //[ 1, 2 ]
console.log(...arr1); //1 2

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);
const arr12 = [1, 2, 3, 4];
sumFunc(...arr12);  // 순서대로 처리되므로 인수로는 1과 2가 들어온다

// 2. 배열 정리
const arr2 = [1,2,3,4,5];
const [number1, number2, ...arr3] = arr2;
console.log(`${number1}\n${number2}\n${arr3}`);

// 3. 배열 복사, 결합
const arr4 = [10, 20];
const arr5 = [30, 40];
const arrCopy = [...arr4];              // 참조형이 아니라 새로 복사하는 것
const arrCombine = [...arr4, ...arr5];
console.log(arrCopy);
console.log(arrCombine);
