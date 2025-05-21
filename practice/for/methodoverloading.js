class Greetings {
    greet(name) {
      if (name) {
        console.log("Good Morning", name);
      } else {
        console.log("Good Morning");
      }
    }
  }
  
  const obj1 = new Greetings();
  obj1.greet();               // Output: Good Morning
  obj1.greet('Sam Solomon');  // Output: Good Morning Sam Solomon
  