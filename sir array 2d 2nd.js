








/*let arr=[[1,2,3,4],[1],[2],[3],[4]];
let arr1=[1,2,3,4];
let arr2=[...arr1,2];
let arr3=[];

arr.forEach((element) => {
arr3.push([...element,1]);
    
});
console.log(arr2);
console.log(arr3);*/



/*
class Solution {
    
    
    reverse(arr,s,e){
        
        while(s<e){
            let temp=arr[s];
            arr[s]=arr[e];
            arr[e]=temp;
            
            s++;
            e--;
        }
    }
    
    
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k){

        for(let startPoint=0;startPoint<n;startPoint+=k){
            
            let endPoint=startPoint+(k-1);
            
            if(endPoint>=n){
                endPoint=n-1;
            }
            
            this.reverse(arr,startPoint,endPoint);
            
        }
        
    return arr;

        
    }
}
*/


/*
function printSpecialWay(arr,m,n){

     
    for(let i=0;i<m;i++){

        let x=i;
        let y=0;

        while(x>=0 && y<n){
            console.log(arr[x][y]);
            x--;
            y++;
        }

    }
    for(j=1;j<n;j++){

        let x=m-1;
        let y=j;

        while(x>=0 && y<n){
            console.log(arr[x][y]);
            x--;
            y++;
        }

    }

}
printSpecialWay([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]],5,4);

*/


  /*
  //Function to find if there is a celebrity in the party or not.
  celebrity(M, n)
  {
      
      for(let i=0;i<n;i++){
          
          var col;
          
          //check if ith person is a celebrity 
          
          for(col=0;col<n;col++){
              
              if(M[i][col]===1){
                  break;
              }
          }
          
          if(col!==n){
            continue;
          }
          
          var row;
          
          for(row=0;row<n;row++){
              
              if(row!=i && M[row][i]===0){
                  break;
              }
          }
          
          if(row===n){
              return i;
          }
      }
      
      return -1;
  }

*/
/*
var arguments = process.argv

function add(a,b){
    return a+b;
}

console.log(add(parseInt(arguments[2]),parseInt(arguments[3])));

*/


/*function sortAArray(arr){

    arr.sort(function(b,a){
        //console.log(a,b);
        
        if(a>b){
            return -1;
        }else{
            return 1;
        }
    })

}

const arr=["apple","aaba","banana","rahul","mango","strawerry","orange"];
sortAArray(arr);
console.log(arr);
*/


/*
function findUniqueElements(arr,m,n)
{
    let freq={};
    for(let i=0;i<m;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(freq[arr[i][j]]==undefined)
            {
                freq[arr[i][j]]=1;
            }
            else{
                freq[arr[i][j]]+=1;
            }

        }
    }
    let ans=[];
    let keys=Object.keys(freq);
    for(let i=0;i<keys.length;i++)
    {
        if(freq[keys[i]]===1)
        {
            ans.push(keys[i]);
        }
    }

    return ans;
}
console.log(findUniqueElements([[2,14,15,18],[10,18,14,22],[8,21,22,15],[10,14,21,28]],4,4))
*/

/*
function maxEachRow(arr,m,n){

    let ans=[];

    for(let row=0;row<m;row++){

        let maxElement=arr[row][0];

        for(let col=0;col<n;col++){
            maxElement=Math.max(maxElement,arr[row][col]);
        }

        ans.push(maxElement);
    }

    return ans;
}


console.log(maxEachRow([[1,7,11],[44,13,17],[5,16,19]],3,3));
*/
/*IMP
function isElementPresent(arr,m,n,x){

    let i=0, j=n-1;

    while(j>=0 && i<n){

        if(arr[i][j]===x){
            return true;
        }

        if(arr[i][j]>x){
            j--;
        }else{
            i++;
        }
    }

    return false;
}


console.log(isElementPresent([[1,7,11],[4,13,17],[5,16,19]],3,3,3));
*/



/*function printColumnSum(matrix,m,n){

  let ans=[];


  for(let column=0;column<n;column++){

      let sum=0;

      for(let row=0;row<m;row++){
          sum+=matrix[row][column];
      }

      ans.push(sum);
  }

  return ans;
}

console.log(printColumnSum([[1,3,5],[6,5,4],[525,24,5]],3,3));
*/




/*function isDiagonalMatrix(arr,n){


  for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){

          if(i===j || i+j===n-1){
              continue;
          }

          if(arr[i][j]!==0){
              return false;
          }

      }
  }

  return true;
}*/


/*
var spiralOrder = function(matrix) {
    
  let m=matrix.length;
  let n=matrix[0].length;
  
  let ans=[];
  
  let fr=0,lr=m-1,fc=0,lc=n-1;
  
  while(fr<=lr && fc<=lc){
      
      // FR -> FC to LC
      
      for(let i=fc;i<=lc;i++){
          ans.push(matrix[fr][i]);
      }
      fr++;
      
      // LC -> FR to LR 
      
      for(let i=fr;i<=lr;i++){
          ans.push(matrix[i][lc]);
      }
      lc--;
      
      //LR -> LC to FC 
      
      if(fr>lr){
          break;
      }
      
      for(let i=lc;i>=fc;i--){
          ans.push(matrix[lr][i]);
      }
      
      lr--;
      
      if(fc>lc){
          break;
      }
      
      // FC -> LR to FR 
      
      for(let i=lr;i>=fr;i--){
          ans.push(matrix[i][fc]);
      }
      
      fc++;
  }
  
  return ans;
  
};
*/




//functions are first class citizens in javascript

//assign function to variables
//pass functions as arugements
//return functions from functions



/*var x=5;
var x="hello";
var arr=[1,2,3,4];
var person={
name:"Utkarsh"
}


var f=function fun(){
console.log("hello");
}

f();


function add(a,b){
return a+b;
}


function average(a,b,c){
return c(a,b)/2;
}


average(1,2,add);

function sayHi(){

function sayHello(name){
console.log("Hello ",name);
}

return sayHello;
}

const a=sayHi();
a("Utkarsh");
*/