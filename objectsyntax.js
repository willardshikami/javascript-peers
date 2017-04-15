var phonebookEntry = {};

phonebookEntry.name = 'Stacey Nyandiko';
phonebookEntry.number = 254788430186;

phonebookEntry.phone = function(){
    console.log('Calling ' + this.name + ' at ' + this.number + '...')
};

phonebookEntry.phone();