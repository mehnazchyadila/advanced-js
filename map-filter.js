const numbers = [3, 4, 6, 8, 2];
const output = [];
for(let i = 0 ; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element ;
    output.push(result);
}

numbers.map(function(numbers , index ,array){
    console.log(numbers,index,array);
});

const result = numbers.map(function(element){
    return element * element ;
});

const result = numbers.map(x => x * x);
console.log(result);

const bigger = numbers.filter( x => x > 5);
console.groupCollapsed(bigger);

const isThere = numbers.find( x => x > 2);
console.log(isThere);