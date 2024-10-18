// FILTER :
    let marks = [10,20,30,40,50,60,70,80,90,100];
    console.log(marks);

    new_arr = marks.filter(function(item){
        if(item > 50){
            // return [true,index];                 // It will not return the index.
            return true;
        }
        return false;
    })

    console.log(new_arr);               // New Array creates after applying filter method.