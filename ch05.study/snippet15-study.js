const obj1=  {
  [Symbol.toStringTag] : "Niffy"
};

console.log(obj1.toString()); // "[object Nifty]"

// 프로토타입을 통해

const p = {
  [Symbol.toStringTag] : "Spiffy"
};

const obj2 = Object.create(p);
console.log(obj2.toString());//"[object Spiffy]"
