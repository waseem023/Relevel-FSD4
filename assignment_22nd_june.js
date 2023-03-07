//1st program
var obj1={
  a:2,
  name1 : {
    firstName:'pihgnds',
    lastName:'nudsbk'

  }
};

let {
  
  name1: {
    firstName : fname, 
    lastName  :lname
  }
}= obj1;

console.log(fname);
console.log(lname);
//2.program
var realobj={
  a:1,
  b:2,
  c:3
};
var clonedobj=realobj;
clonedobj['a']=10;
clonedobj['b']=10;
clonedobj['c']=10;
for(const key in realobj)
{
  console.log(`${key}:${realobj[key]}`);
}
