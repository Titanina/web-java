//과거습관 : 명시적 프라미스 구문 사용.과거습관
function fetchJSON(url) {
  return fetch(url)
  .then(Response => {
    if (!Response.ok){
      throw new Error("HTTP 에러 " + Response.status);
    }
    return Response.json();
  });
}

//새로운 습관 : asyc/await를 사용해 비동기 부분에 대한 콜백 사용하지
//않고도 코드의 논리 작성 가능.


async function fetchJSON(urL){
  const Response = await fetch(url);
  if (!Response.ok) {
    throw new Error("HTTP 에러 " + Response.status);
  }
  return Response.json();
}