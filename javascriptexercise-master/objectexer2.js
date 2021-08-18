var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryId: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryId: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryId: 3245
    }];

    function compare(a,b){
        if(a.title<b.title){
            return -1;
        }
        else{
            return 1;
        }
    }

    console.log(library.sort(compare));