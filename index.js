/*
var today=new Date();
var day=today.getDay();
var daylist=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(daylist[today.getDay()]);
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
console.log("time is" + hours+" "+minutes+" ",seconds);

var a=5,b=6,c=7;
var area=a*b*c;
console.log(area); 
var stringl="w3resource";
console.log(stringl.length);

for(var year=2014;year<=2050;year++)
{
    var d=new Date(year,0,1);
    if(d.getDay()===0)
    console.log("Sunday  "+year);
}
console.log(document.URL);
filename = "system.php"
console.log(filename.split('.').pop());
filename = "abc.js"
console.log(filename.split('.').pop());

function multiply()
{
num1=document.getElementById("firstnumber").value;
num2=document.getElementById("secondnumber").value;
document.getElementById("result").innerHTML=num1*num2;
}
function divide()
{
    num1=document.getElementById("firstnumber").value;
    num2=document.getElementById("secondnumber").value;
    document.getElementById("result").innerHTML=num1/num2;
}
function changecase(txt)
{var str1="";
for(var i=0;i<txt.length;i++)
{
    if(/[A-Z]/.test(txt[i]))
    {
        str1+=txt[i].toLowerCase();
    }
    else
    {
        str1+=txt[i].toUpperCase();
    }
   
}
return str1;
}
console.log(changecase("Kiran"));

function sumofcube(num)
{ 
    var sum=0
    for(var i =1;i<=num;i++)
    {
        sum+=i*i*i;
    }
    return sum;
}
console.log(sumofcube(3));

function sortarray(arrays)
{
for(var i=0;i<arrays.length;i++)
{
    for(var j=i+1;j<arrays.length;j++)
    {
        if(arrays[i].length>arrays[j].length)
        {
            var m=arrays[i];
            arrays[i]=arrays[j];
            arrays[j]=m;
        }       
    }
}
return arrays;
}
arrays=["abc","xyz","aa","bb","pqr","","a"]
console.log(sortarray(arrays));
*/
function sum(discount,...args)
{
    sum=args.reduce((a,b)=>a+b);
    return sum*(1-discount);
}
console.log(sum(0.1,1,2,3,4,5));