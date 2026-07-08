let time = +prompt('enter number from 0 to 59');
if(time>0 && time<=15){
    console.log('first');
}
else if(time>=15 && time<30){
    console.log('seconds');
}
else if(time>=30 && time<45){
    console.log('thirds');
}
else if (time>=45 && time<60){
    console.log('fourth');
}
else{
    console.log('error');
}