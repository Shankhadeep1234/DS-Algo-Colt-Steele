//Call, Apply and Bind
var employee = { fname: "Raj", lname: "Bhadra" };

function invite(greet1, gree2) {
  console.log(greet1 + " " + this.fname + " " + this.lname + " " + gree2);
}

//call- The call() method invokes a function with a given this value and arguments provided one by one
invite.call(employee, "Hello", "how are you");

//apply - Invokes the function with a given this value and allows you to pass in arguments as an array
invite.apply(employee, ["Hello", "how are you"]);

//bind - returns a new function, allowing you to pass any number of arguments
let invitation1 = invite.bind(employee);
invitation1("Hello", "how are you");
