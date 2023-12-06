var z=document.getElementById("b");

var a=document.getElementById("in");
var b=document.getElementById("main");
var x=1;
var p=document.getElementById("get");
var q=document.getElementById("put");
function print()
{
    if(p.value!="")
    {
        var m=(p.value-32) * 5/9 ;
        q.textContent=" celsius : "+m;
    }
    else{
        q.textContent="Please enter a value";
    }
   
}
function rey(){
    if(x%2!=0)
    {
        a.style.display="flex";
        
        b.style.height="300px"
        z.style.height="320px"

        x+=1
    }
    else{
        a.style.display="none";
        b.style.height="60px"
        z.style.height="60px"

        x+=1;
    }
    
}
function r()
{
    x-=1;
}





var a1=document.getElementById("in1");
var b1=document.getElementById("main1");
var x1=1;
var p1=document.getElementById("get1");
var q1=document.getElementById("put1");
function print1()
{
    if(p1.value!="")
    {
        var m=(p1.value * 9/5) + 32;
        q1.textContent=" Fahrenheit: "+m;
    }
    else{
        q1.textContent="Please enter a value";
    }
   
}
function rey1(){
    if(x1%2!=0)
    {
        a1.style.display="flex";
        
        b1.style.height="300px"
        z.style.height="320px"

        x1+=1
    }
    else{
        a1.style.display="none";
        b1.style.height="60px"
        z.style.height="60px"

        x1+=1;
    }
    
}
function r1()
{
    x1-=1;
}







var a2=document.getElementById("in2");
var b2=document.getElementById("main2");
var x2=1;
var p2=document.getElementById("get2");
var q2=document.getElementById("put2");
function print2()
{
    if(p2.value!="")
    {
        var m=(p2.value - 32) *5/9 + 273.15 ;
        q2.textContent=" kelvin : "+m;
    }
    else{
        q2.textContent="Please enter a value";
    }
   
}
function rey2(){
    if(x2%2!=0)
    {
        a2.style.display="flex";
        
        b2.style.height="300px"
        z.style.height="320px"

        x2+=1
    }
    else{
        a2.style.display="none";
        b2.style.height="60px"
        z.style.height="60px"

        x2+=1;
    }
    
}
function r2()
{
    x2-=1;
}









var a3=document.getElementById("in3");
var b3=document.getElementById("main3");
var x3=1;
var p3=document.getElementById("get3");
var q3=document.getElementById("put3");
function print3()
{
    if(p3.value!="")
    {
        var m=parseFloat(p3.value) + 273.15 ;
        q3.textContent="  kelvin : "+m;
    }
    else{
        q3.textContent="Please enter a value";
    }
   
}
function rey3(){
    if(x3%2!=0)
    {
        a3.style.display="flex";
        
        b3.style.height="300px"

        x3+=1
    }
    else{
        a3.style.display="none";
        b3.style.height="60px"

        x3+=1;
    }
    
}
function r3()
{
    x3-=1;
}






var a4=document.getElementById("in4");
var b4=document.getElementById("main4");
var x4=1;
var p4=document.getElementById("get4");
var q4=document.getElementById("put4");
function print4()
{
    if(p4.value!="")
    {
        var m=parseFloat(p4.value) - 273.15 ;
        
        q4.textContent=" celsius : "+m;
    }
    else{
        q4.textContent="Please enter a value";
    }
   
}
function rey4(){
    if(x4%2!=0)
    {
        a4.style.display="flex";
        
        b4.style.height="300px"

        x4+=1
    }
    else{
        a4.style.display="none";
        b4.style.height="60px"

        x4+=1;
    }
    
}
function r4()
{
    x4-=1;
}


var a5=document.getElementById("in5");
var b5=document.getElementById("main5");
var x5=1;
var p5=document.getElementById("get5");
var q5=document.getElementById("put5");
function print5()
{
    if(p5.value!="")
    {
        var m=(p5.value - 273.15) * 9/5 + 32 ;
        
        q5.textContent=" Fahrenheit : "+m;
    }
    else{
        q5.textContent="Please enter a value";
    }
   
}
function rey5(){
    if(x5%2!=0)
    {
        a5.style.display="flex";
        
        b5.style.height="300px"

        x5+=1
    }
    else{
        a5.style.display="none";
        b5.style.height="60px"

        x5+=1;
    }
    
}
function r5()
{
    x5-=1;
}

