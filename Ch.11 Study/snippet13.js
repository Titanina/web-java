//배열의 버퍼 속성을 통해 타입이 있는 배열에 연결된 버퍼에 접근할수 있다.

const a = new Int32Array(5);
console.log(a.buffer.byteLength); //20(바이트)
console.log(a.length); // 5(엔트리, 각각 4바이트를 차지한다)

//ArrayBuffer를 명시적으로 생성한 다음 배열을 생성할떄 타입이 있는 배열 생성자에
//전달할 수도 있다.

const buf = new.ArrayBuffer(20);
const a = new Int32Array(buf);
console.log(buf.byteLength); // 20(바이트)
console.log(a.length) // 5(엔트리, 각각 4바이트를 차지한다.)

//생성중인 타입이 잇는 배열에 대해 올바른 크기가 아닌 버퍼를 사용하려고하면
//오류가 발생한다.

const buf = new ArrayBuffer(18);
const a = new Int32Array(buf); // RangeError : byte Iength of Int32Array
//4의 배수여야한다.
