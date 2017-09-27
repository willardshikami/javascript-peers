//Object that contains name, occupation and age with their respective values
var profile = {
    name : "Willard Shikami",
    occupation : "Software Engineer",
    age : 24
}

//For loop to iterate through the object and print out the key values
for(key in profile){
    console.log(key + ": " + profile[key]);
}