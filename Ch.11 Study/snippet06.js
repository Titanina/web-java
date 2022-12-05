const a = [, "x", , , "y"];
for (const index of a.keys()) {
  console.log(index, index in a ? "present" : "absent");

}

// 배열 a는 인덱스는 0,2,3엔 엔트리가 없다. 인덱스 1과 4에만 엔트리가 있다.
//이 코드는 다음을 출력한다.

0 "absent"
1 "present"
2 "absent"
3 "absent"
4 "present"

