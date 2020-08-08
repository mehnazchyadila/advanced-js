const numbers = [3, 4, 6, 8, 2];
const output = [];
for(let i = 0 ; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element ;
    output.push(result);
}

console.log(output);