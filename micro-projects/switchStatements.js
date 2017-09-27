var lunch = prompt('Whats for lunch?','Type your choice here');

switch(lunch){
    case 'sandwich':
        console.log('sure thing! One sandwich coming up.');
        break;
    case 'soup':
        console.log('Got it, Tomato is my favourite');
        break;
    case 'salad':
        console.log('Sounds good, how about a ceaser salad');
        break;
    case 'pie':
        console.log('Pie is not a meal');
        break;
    default :
        console.log('I am not sure what ' +lunch + ' is, can you have the sandwich instead?');
}