promsieSomething({data: "example"})
.then(({result, status}) => {
  console.log("Got:", result, status);
})
.catch(error => {
  console.error(error);
});

//resolve와 달리 thenable을 제공하면 reject는 다르게 작동하지않는다.

new Promise((resolve, reject) => {
  const willReject = new Promise((resolve2, reject2) => {
    setTimeout(() => {
      reject2(new Error("rejected"));
    }, 100);
  });
  reject(willReject);
})
.catch(error => {
  console.error(error);
});

// 이것이 resolve와 reject의 큰 차이이다. resolve가 프라미스를 확정하는 동안
//다른 프라미스 또는 thenable(다른 프라미스를 기다리거나 이행할수 잇을때까지 
//기다려야 할수있음)으로 확정할수 있는 가능성 포함하여 프라미스를 즉시 거부.
