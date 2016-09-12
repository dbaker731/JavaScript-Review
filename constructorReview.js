//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function Animal( species, name, legs, color, foods ){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this. foods = foods;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function Person( name, age, height, gender ){
  var person = {
    name: name,
    age: age,
    height: height,
    gender: gender
  };
  return person;
}


//Create a animal array and a person array.

  //code here
var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array

  //code here
var cat = new Animal( 'Feline', 'cat', 4, 'black', 'cat food');
var dog = new Animal( 'Notfeline', 'dog', 4, 'blue', 'dog food');
animal.push( cat, dog );
console.log( animal );

//Create two instances of person and push those into your person array.

  //code here
var Daniel = Person( 'Daniel', 23, '5\'8', 'male' );
var Olivia = Person( 'Olivia', 23, '5\'6', 'female' );
person.push( Daniel, Olivia );
console.log( person );

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
