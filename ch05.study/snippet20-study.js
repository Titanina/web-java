const s = Symbol.for("my-nifty-symbol");
const key = Symbol.keyFor(s);
console.log(key); // "my-nifty-symbol"

//Symbol.keyFor는 전달한 심볼이 전역레지스트리에 없다면 undefined를 반환함.
