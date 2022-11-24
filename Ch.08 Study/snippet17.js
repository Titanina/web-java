Promise.all(arrayOfURLs.map(
  url => myFetch(url).then(Response => Response.json())
))
.then(results => {
  //results 배열을 사용.
  console.log(results);
})
.catch(error => {
  // 오류 처리
  console.error(error);

});