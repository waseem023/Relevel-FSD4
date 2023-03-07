


/*var arguments = process.argv
const arr=JSON.parse(arguments[2]);
let sum=0;
for(let i=0;i<arr.length;i++)
{
  sum+=arr[i];
}
console.log(sum);

/*
var arguments = process.argv

function add(a,b){
    return a+b;
}

console.log(add(parseInt(arguments[2]),parseInt(arguments[3])));

*/


/*function test(x)
{
  x++;
  console.log(x);
}
var a=5;
test(a)
console.log(a);
//console.log(x);*/


var arguments = process.argv
//console.log(arguments[4]);
var ar1=JSON.parse(arguments[2]);
ar1.forEach(element => {
  console.log(element*2);
});
