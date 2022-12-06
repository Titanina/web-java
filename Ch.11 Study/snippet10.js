result = theArray.find(predicateFn[, thisArg])

//find 메서드는 조건함수를 사용하여 배열에서 첫번째로 일치하는 엔트리의 값을 찾음

const x = [].find(value => true);
console.log(x); // undefined

//빈 배열에서 find를 호출하면 조건자가 정확한 값을 반환하기전에 find가 
//엔트리를 모두 사용하기때문에 항상 undefined값을 반환한다.(조건함수 호출안되서)

