//Object Manipulation
obj = {
  a: "Fry",
  b: "Combustion",
  c: "Love",
  d: "Two Chains",
  e: "Kindness",
  f: "Temptation",
  g: "Grizzly",
  h: "Daisy",
  i: "Essence",
  j: "Xbox 360",
};
console.log(obj);

delete obj.e;
delete obj.g;
console.log(obj);
obj.k = "Microsoft";
obj.l = "Tranquility";
obj.m = "Jazz Musical";
console.log(obj);
console.log("Keys:", Object.keys(obj).length);
console.log("Values:", Object.values(obj).length);
