keyslterator = the Array.keys()
//keys 메서드는 배열의 키에 대한 이터레이터를 반환한다. 배열의 키는 0부터
//length -1 까지의 숫자이다. 예를 들면 다음은 0,1,2를 차례로 출력한다.

const a = ["one", "two", "three"];
for (const index of a.keys()) {
  console.log(index);
}

