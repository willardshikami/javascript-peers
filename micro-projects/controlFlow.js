//An array of 10 numbers
var sumArray = [0,1,2,3,4,5,6,7,8,9];

var i = 0;
var total = 0;

//iterate through the array and increament the 'total' value
while(i < sumArray.length){
    total += sumArray[i];
    console.log(total)
    i++
}

