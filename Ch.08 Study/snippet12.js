//Promise.reject(x)는 다음의 축약이다.

new Promise((resolve, reject => reject(x)))

//즉 거부 이유로 거부된 프라미스 생성.
//처리를 거부로 변환하려는 경우 대한 일반적인 사례중 하나는 then 핸들러에 있다.

.then(value =>{
  if(value == null) {
    return Promise.reject(new Error());

  }
  return value;
})

//throw를 대신해 사용할수 있따.
