function getRemainder(){
    console.log('Water the plants.');
}
function greetInSpanish(){
    console.log('Buenas Tardes.');
}
function sayThanks(name){
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Bhagwat')
function shoppingList(item1="milk",item2='bread',item3='eggs'){
    console.log(`the items are ${item1} ${item2} ${item3}`);

}
shoppingList('parle-g','oreo','hide n seek');
function monitorCount(rows,columns) {
    return rows*columns;
}
const numOfMonitors =monitorCount(5,4);
console.log(numOfMonitors)
function costOfMonitors(rows,columns){
    return monitorCount(rows,columns)*200;

}
const totalCost =costOfMonitors(10,12);
console.log(totalCost);
const plantNeedsWater = (day)=>{
    if (day=='wednesday'){
        return true;
    }
    else{
        return false;
    }
}
console.log(plantNeedsWater('tuesday'));