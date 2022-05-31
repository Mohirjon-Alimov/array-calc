let numbers = [1, 3, 5, 7, 2];


let plus = function(plusNum) {
  let result = 0;
  for(let number of numbers){
    result += number;
  }
  return result
}
console.log(plus(numbers));
