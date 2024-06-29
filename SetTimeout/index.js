function str(){
    setInterval(()=>{
        document.getElementById("demo").innerHTML += "Hello" + " ";
    },3000)
}

//========================================================
var u;
function str(){
let a=1
   
   u= setInterval(()=>{
    document.getElementById("demo").innerHTML=a++;
    },1000)
}
function stp(){
    clearInterval(u);
}