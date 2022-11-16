let [first, {a, b}, last] = [1, {a: 2, b: 3}, 4];
console.log(first, a, b, last); // 1 2 3 4

//함수와 호출은 매개변수를 배열로 사용하는 방식과 정확히 동일.

function example([a, b])
{
  console.log(a, b);
}
const arr = [1, 2, 3, 4];
example(arr); // 1, 2
example(["ayy", "bee"]); // "ayy", "bee"

// 이터러블 디스트럭처링 가능

function example({a, b = 2}) {
  console.log(a, b);
}
const o = {a: 1};
example(o); // 1, 2

// 디스트럭처링 기본값 가능
