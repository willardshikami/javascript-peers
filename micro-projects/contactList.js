var friends = {}
    friends.bill = {
        firstName : 'Bill',
        lastName : 'Murray',
        number : '8347858945434',
        address : ['ny', 'kisumu', 'kenya', '08283']},
            
    friends.steve = { 
        firstName : 'Steve',
        lastName : 'Aoki',
        number : '7781728298168',
        address : ['tomboya', 'kisumu', 'kenya', '84639']}

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name){
    for(var prop in friends){
    if(friends[prop].firstName === name){
        console.log(friends[prop]);
    }
    }    
};

search ('Bill');