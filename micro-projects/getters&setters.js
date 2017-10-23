obj = {
  //set the values of first and last name inside the object
  firstName : "Mike", 
  lastName: "Ross",
  
  //function to return the full name.
  get fullName(){
    return this.firstName + ' ' + this.lastName;
  },

  //setter to set new dynamically computerized values.
  set fullName(value){
    var fullNameArray = value.split(' ');
    this.firstName = fullNameArray[0];
    this.lastName = fullNameArray[1];
  }
}

//Initial values
console.log(obj.firstName);

//Setting a new values for the firstName object
obj.firstName = "Willard";
//New value replaces the initial value as the firstName
console.log(obj.firstName);