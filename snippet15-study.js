function extend(target, ...sources) {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {

      target[key] = source[key];

    });
  });
  return target;
}

const obj = extend({}, {a: 1}, {b: 2});
console.log(obj);
