/*Create a function called customMap in JavaScript that mimics the behavior of the Array.map() method. The function should take an array and a callback function as arguments. The callback function should accept three parameters: the current element, its index, and the original array. The customMap function should iterate over each element in the array, apply the callback function, and return a new array containing the results.
Additionally, check if the passed argument is an array. If it's not an
Additionally, check if the passed argument is an array. If it's not an array, log an error to the console.*/

function customMap(arr, callbackfun){
    if(!Array.isArray(arr)){
        console.error("First Argument Should Be An Array Enter it Again");
        //check if the first argument is array or not
        return;
    }
    const result =[];
    for(let i=0; i<arr.length; i++){
        result.push(callbackfun(arr[i], i, arr));
    }
    return result;
}

const numbers =[1,2,3,4,5];
const cubenum= customMap(numbers, (element, index, array)=>{
   return element*element*element;
   //return the customMap output 
});
console.log(cubenum);
