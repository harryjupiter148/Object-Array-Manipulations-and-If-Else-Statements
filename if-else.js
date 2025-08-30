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
