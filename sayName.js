//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age) {
    this.name = name;
    this.age = age;
}


//Now create three instances of Person with data you make up

var steven = new Person('Steven', 26);
var audrey = new Person('Audrey', 23);
var megan = new Person('Megan', 19);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
    alert(this.name);
};

audrey.sayName();