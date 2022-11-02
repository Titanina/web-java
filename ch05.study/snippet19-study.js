const everUpward = (() => {
  const count = Symbol("count");
  return {
    [count]: 0,
    increment() {
      return ++this[count];
    },
    get() {
      return this[count];
    }
  };
})();
console.log(everUpward.get()); // 0
everUpward.increment();
console.log(everUpward.get()); // 1
console.log(everUpward["count"]); //undefined
console.log(everUpward[Symbol("count")]);//undefined

//심볼에대한 일반적오해는 정보은닉을 위한것이 아니란것이다.
//count에 저장된 심볼에대한 접근권한이 없으면 속성을 얻을수 있다.
//count에 저장된 심볼은 검색할수  있기에 심볼은 비공개가 아니고, 검색이
//가능해서 심볼은 속성에 대한 정보은닉은 제공하지않는다.

