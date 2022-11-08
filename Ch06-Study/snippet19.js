for (let n = 0; n < Array.length; ++n) {
  console.log(Array[n]);
}
// or
Array.forEach(entry => console.log(entry));

//과거 습관 : for 루프 또는 foreach를 사용해 배열 반복.

for (const entry of array) {
  console.log(entry);

}

// 새로운 습관 : 루프본문에 인덱스가 필요하지않다면 대신 for-of를 사용.


Array.prototype.forEach.call(document.querySelectorAll("div"), div => {

  ///..
});

// 과거습관: DOM 컬렉션 반복하기 위해 배열 변환하거나 DOM 컬렉션에서 
// Array.prototype.foreach.call을 사용한다.


for (const div of document.querySelectorAll("div")) {
  // ...
}

// 새로운 습관 : DOM 컬렉션이 사용자 환경에서 반복 가능한지 확인하고 해당
// 반복성을 직접 사용하자.
