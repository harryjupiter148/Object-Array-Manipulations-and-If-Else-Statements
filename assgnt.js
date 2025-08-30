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

//Array manipulation
Array = [10, 50, 90, 1, 70, 3.14, 80, 6.5, 40, 20];
console.log(Array);

Array.pop();
Array.pop();
console.log(Array);
Array[0] = "Raven";
Array[1] = "Panther";
Array[2] = "Antelope";
Array[3] = "Mantis Shrimp";
Array[4] = "Hyena";
Array[5] = "Ostrich";
Array[6] = "Wren";
Array[7] = "Egret";
console.log(Array);

// If Else Statements
const profile = {
  name: "Harry Jupiter",
  age: 20,
  school: "UNN",
  regNo: "",
  faculty: "Physical Sciences",
  dept: "",
};

// Request for a field befor the next
if (!profile.name) {
  console.log("Hello, Mr... What's your name again?");
} else if (!profile.age) {
  console.log("Seems you are ime itself!");
} else if (!profile.school) {
  console.log("I didn't know you dropped out!");
} else if (!profile.regNo) {
  console.log("How can we identify you without your ID substitue?");
} else if (!profile.faculty) {
  console.log("You do seem a bit lost with your faculty!");
} else if (!profile.dept) {
  console.log("How did you end up not having a department?");
} else {
  console.log("Congratulations! You have a complete Profile!");
}

// Show all required field if empty
if (!profile.name) {
  console.log("Name is required!");
}
if (!profile.age) {
  console.log("Age is required!");
}
if (!profile.school) {
  console.log("School is required!");
}
if (!profile.regNo) {
  console.log("Registration Number is required!");
}
if (!profile.faculty) {
  console.log("Faculty is required!");
}
if (!profile.dept) {
  console.log("Department is required!");
}
