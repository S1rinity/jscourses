// // let color ='green';
// // if(color === 'red'){
// //     console.log('stop');
// // }
// // else{
// //     console.log('go');
// // }
// let age = +prompt('enter your age');
// if(age >=18){
//     console.log('content');
// }
// else{
//     console.log('multici');
// }
 let color = prompt('enter color');
if (color === 'green' && confirm('road clear?')){
    console.log('go')
}
else if (color === 'yellow'){
    console.log('wait')
}
else if (color === 'red '){
    console.log('stop')
}
else {
    console.log('????')
}