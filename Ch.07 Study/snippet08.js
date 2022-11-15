const a = [1,2,3,4,5];
const [first, second, ....rest] = a;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5]

//이 코드에서 first는 첫번째 배열의 엔트리 값을 가져오고
//second는 두번째 엔트리 값을 가져오고
//rest는 나머지 값을 포함하는 새 배열을 가져온다.
//패턴의 나머지 엔트리는 끝에 있어야 한다.

