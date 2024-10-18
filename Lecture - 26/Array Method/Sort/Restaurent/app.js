let menu = ['paneer masala','palak paneer','chhole chawal','paneer butter-masal','manchurian','chicken briyani','pizza','egg burji','soda'];

console.log(menu);


function isVeg(food){
    if(food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1)
        return false;
    return true;
}

let veg = menu.filter(isVeg)
console.log(veg);