const s = "ple";
const obj = {
  "biz-baz"() {
    console.log("Ran biz-baz");
  },
  ["exam" +s]() {
    console.log("Ran example");
  }
};
obj["biz-baz"](); // "Ran Biz-baz"
obj.example(); // "Ran example"

