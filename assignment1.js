function palindrome(num)
{
  let factors=0;
  for(i=1;i<=num;i++){
    if(num%i==0)
    {
      factors++;
    }
  }
  if (factors===2) { 
    str=String(num);
       b=str.length;
       for(let i=0;i<=Math.floor(b/2);i++)
   {
        if(str[i]!==str[b-1-i]){
        return;
        }
   } 

     console.log(str);
  }
  

}
function palindromTilln(n)
{
  for(let i=0;i<=n;i++)
  palindrome(i);

}
palindromTilln(50);



function name1(n)
{
  switch(n)
  {
    case "Alex":
    console.log("Developer");
    break
    case "John":
      console.log("Artist");
      break;
      case "Strek":
      console.log("Singer");
      break;
      case "Smith":
      console.log("Actor");
      default:
        console.log("name not found");
  }

}
name1("Strek");
name1("mathew");
