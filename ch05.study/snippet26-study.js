const obj = {
  [Symbol.toPrimitive](hint) {
    const result = hint === "string" ? "str" : 42;
    console.log("hint = " + hint + ",  returning " +  JSON.stringify(result));
    return result;
  }
};

//객체에 Symbol.toPrimitive에 의해 키가 지정된 메서드("자신" 메서드 또는 
//상속된 메서드)가 있는경우 valueOf 또는 toString 대신 해당 메서드가 사용된다.
//더 좋은 점은 기본 작업에 선호도가 없는 경우 선호하는 유형(유형 힌트)을
//인수("number" , "string", "default")로 받는다. 