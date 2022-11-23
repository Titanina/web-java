startSomething()
.then(Response => {
    doSomethingWith(Response.result);
})
.catch(handleError);