let sale=true;
sale =false;
if (sale){
    console.log('time to buy!');
}
else{
    console.log('Time to wait for a sale.');

}
let hungerLevel=7;
if(hungerLevel>7){
    console.log('time to Eat');

}
else{
    console.log('we can eat later');
}
let mood=true;
let tirednessLevel=9;
if(mood===true||tirednessLevel===9){
    console.log('time to sleep')
}
else{
    console.log('not bed time yet');
}
let wordCount = 5;
if (wordCount){
    console.log('Great ! You have started the work!');
}
else{
    console.log('you are not doing any thing');
}
let writingUtensil ='tool' || 'marker';
if (writingUtensil){
    console.log('the pen is mightier than the sword');
}
else{

}
let isDayTime=false;

isDayTime ? console.log('Turn off the lights!') : console.log('Turn on the lights!');
let season='summer'
if (season=='summer'){
    console.log('It\'s sunny and warm because it\'s summer!');
}
else if(season="winter"){
    console.log('It\'s winter! Everything is covered in snow.');
}
else if (season="fall"){
    console.log('It\'s fall! Leaves are falling!');
}
else{
    console.log('god knows what happning');
}
let athleteFinalPosition= 'first place';
switch (athleteFinalPosition){
    case 'first place' :
        console.log('you get the gold medal');
        break;
    case 'second place' :
        console.log('you get the silver medal');
        break;
    case 'third place' :
        console.log('You get the bronze medal!'); 
        break; 
    default:
        console.log('No medal awarded');
        break;
}