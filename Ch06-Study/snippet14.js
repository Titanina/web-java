//기본 제네레이터를 직접 사용.

function* simple() {
  for (let n =1; n <=3; ++n){
    yield n;
  }
}

const g = simple();
let result;
while (!(result = g.next()).done) {
  console.log(result.value);
}

//제네레이터 함수(simple)에서 제네레이터 객체(g)를 가져온다음 제네레이터를
//본 방식으로 정확하게 사용한다.(제네레이터는 이터레이터이므로)