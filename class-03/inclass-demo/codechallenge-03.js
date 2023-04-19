//array.prototype.filter shares the call back of map and forEach 
//it takes in value, index, and array
//if the call back returns true, it keeps the thing in the array
//if it returns false it skips it
//it makes a new array with these rules

const names = ['Lister','Holly','SmegHead','Kyrton','Rimmer', 'Toasty','Cat'];

let returnTrue = names.filter((value, index, arr) => {
  return true;
});
console.log('returnTrue : ', returnTrue);
console.log('\n');
let returnFalse =  names.filter((value, index, arr) => {
  return false;
});
console.log('returnFalse : ', returnFalse);
console.log('\n');
let modulusOperator = names.filter((value, index, arr) => {
  if(index % 2){
    return true;
  } else {
    return false;
  }
});
console.log('modulusOperator: ', modulusOperator);
console.log('\n');
let lengthLessSix = names.filter((value, index, arr) => {
  if(value.length < 6){
    return true;
  } else {
    return false;
  }
});
console.log('lengthLessSix : ', lengthLessSix);
console.log('\n');
let filteredNames = names.filter((value, index, arr) => {
  console.log('value', value);
  if(value.match(/a/)){
    
    return true;
  } else {
    return false;
  }
});
console.log('filteredNames: ', filteredNames);
console.log('\n');
//return true or return false, and filter will build out the array. 