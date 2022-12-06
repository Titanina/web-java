//entries에서 엔트리를 반복할떄 인덱스와 값을 이산 변수 또는 상수로 가져오기 위해
//디스트럭처링 할당(7장 참조)을 사용하는 것이 일반적이다.entries에서


const a = ["one", "two", "three"];
for (const [index, value] of a.entries()) {
  console.log(index, value);
}

//위 코드는 다음을 출력한다.

0 "one"
1 "two"
2 "three"

//keys나 value와 마찬가지로 반복은 엔트리가 희소해서 배열이 존재하지않는경우도
//엔트리에 포함한다. value와 달리 배열에 키(index)가 있는지 확인하여
//공백이거나 실제 엔트리로 인해 undefined 값을 얻는지 구별할수 있다.

const a = [, undefined, , , "y"];
for (const [index, value] of a.entries()) {
  console.log(index, value, index in a ? "present" : "absent");
}

// 위 코드는 다음과 출력한다.

0 undefined "absent"
1 undefined "present"
2 undefined "absent"
3 undefined "absent"
4 "y" "present"

