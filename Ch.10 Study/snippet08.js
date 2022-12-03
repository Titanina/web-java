const f1 = "Francais";
const f2 = "Franc\u0327ais";
console.log(f1 === f2); // false

//정규화는 이것을 해결할수있따.

console.log(f1.normalize() === f2.normalize()); // true
