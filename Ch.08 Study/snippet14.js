function getData(id) {
  return Myfetch("/url/for/data?id=" + id)
      .then(Response => Response.json());
}