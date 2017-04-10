var user = prompt('What type of movies do you watch?, SCIFI, DRAMA OR HORROR?').toUpperCase();

switch(user){
case 'SCIFI':
var matrix = prompt('Have you watched The Matrix?').toUpperCase();
var starWars = prompt('And have you watched Star Wars?').toUpperCase();
    if(matrix === 'YES' || starWars === 'YES'){
        console.log('Good taste!'); 
    }else{
        console.log('This is not your genre!!');   
    }
    break;
    
//Drama code block starts here
case 'DRAMA':
var hiddenFigures = prompt('Have you watched Hidden Figures?').toUpperCase();
var departed = prompt('Have you watched The Departed?').toUpperCase();
    if(hiddenFigures === 'YES' && departed === 'YES'){
        console.log('Alittle bit of drama isnt that bad');
    }else{
            console.log('This is not your genre!!');    
        }
        break;
        
//Horror code block starts here.
 case 'HORROR':
var conjuring = prompt('Have you watched The Conjuring?').toUpperCase();
var sinister = prompt('Have you watched Sinister?').toUpperCase();
    if(conjuring === 'YES' && sinister === 'YES'){
        console.log('HAHAHA!! You will not sleep tonight!');
    }else{
        console.log('This is not your genre!!')    
    }
        break;
    default:
        console.log('Please input a valid Movie genre.')
}