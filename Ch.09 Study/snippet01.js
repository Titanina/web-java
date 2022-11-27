const data = [
  await fetchJSON("1.json"),
  await fetchJSON("2.json"),
  await fetchJSON("3.json")
];

//병렬로 수행하려면 위처럼 하지마라.
//이유는 병렬이 아닌, 직렬로 하나씩 수행되기때문이다. 

const data = await Promise.all([
  fetchJSON("1.json"),
  fetchJSON("2.json"),
  fetchJSON("3.json"),
]);