
//기본 이터레이터(제너레이터 x)

const a = {
  0 : "a",
  1 : "b",
  2 : "c",
  length : 3,
  [Symbol.iterator]() {
    let index = 0;
    const itPrototype = Object.getPrototypeOf(
      Object.getPrototypeOf([][Symbol.iterator]())
    );
    const it = Object.assign(Object.create(itPrototype), {
      next : () => {
        if (index < this.length) {
          return {value: this[index++], done: false};
        }
        return {value: undefined, done: true};
      }
    });
    return it;
  }

  };
  for (const value of a) {
    console.log(value);
  }




}