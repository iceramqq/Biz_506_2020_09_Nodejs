console.log("=================================");
console.log("js에서 eq 비교연산자");
/*
js에서 같은 값은 비교할때 사용하는 연산자가 2가지가 있다
    동등연산자 : ==
    평등연산자 : ===
*/

let b = 0 == "";
console.log("0 == '' : ", b);
b = 0 === "";
console.log("0 === '' : ", b);
// js에서는 false 경우가 몇가 잇는데
b = "" || null || undefined || NaN || 0 || "없음";
console.log(b);

// 어떤변수에 저장된 값을 비교하여 정확히 일치하는지 알고싶을때는
// 동등이 아닌 평등연산자를 사용하는 것이 정확한 결과를 낼수 잇다
// 문자열 "1"을 숫자형으로
//      또는 숫자1을 문자열형 "1"로 자동 형변환을하여 비교해버린다.
//

b = "1" == 1;
console.log(b);

b = "1" === 1;
console.log(b);

b = null == undefined;
console.log(b);
b = null === undefined;
console.log(b);

/*
(==)동등연산자는 값을 자동형변환하거나 하여 내용물이 같은지만 비교하는 연산자
(===) 평등연산자는 먼저 형을 비교하고 다르면 false 같으면 내용물 비교
*/
console.log(0 == false);
console.log(0 === false);

let num = 0;

if (num && ++num) {
}
console.log(num);

if (num || ++num) {
}
console.log(num);
