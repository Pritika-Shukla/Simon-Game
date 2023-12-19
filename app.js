
let gameSeq =[];
let userSeq =[];
let started=false;
let level=0;
let h3=document.querySelector("h3")
let btns=["red","blue","green","yellow"];
//game start
let keypress=document.addEventListener("keydown",function(){
    if(started===false){
        console.log("keypress")
         started=true;
         levelUp();
    }
})
//button flash
function btnFlash(box){
    box.classList.add("flash");
    setTimeout(function (){
        box.classList.remove("flash");
    },250);
}
//level up
function levelUp()
{
    userSeq=[];
 level++;
 h3.innerText=`level ${level}`;
  
 let randIndx=Math.floor(Math.random()*3);
 let randColor=btns[randIndx];
 let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);

 btnFlash(randBtn)
}
function checkAns(idx){

if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length)
    {
     setTimeout(levelUp,1000)
    }
}
else{
    h3.innerHTML=`Game over! Your score was <b>${level}</b> </br> Press any key to start .`;
    reset();
}

}
//btn press
function btnPress(){
  let box= this;
  userFlash(box)
  userColor=box.getAttribute("id");

  userSeq.push(userColor)

  checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".box");
for(box of allBtn){
  box.addEventListener("click",btnPress)
}
//user flash
function userFlash(box){
    box.classList.add("userFlash");
    setTimeout(function (){
        box.classList.remove("userFlash");
    },250);
}

function reset(){
    started==false;
    gameSeq=[];
    userSeq=[];
    level=0;

}





