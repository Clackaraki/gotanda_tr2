const dino= document.getElementById("dino");
const cactus=document.getElementById("cactus");


function jump(){
    if (dino.classList !="jump"){
    dino.classList.add("jump");

    setTimeout(function(){
        dino.classList.remove("jump");
    },300);
  }   
}

let isAlive =setInterval(function(){
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
     let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));



     if(cactusLeft < 50 && cactusLeft >0 && dinoTop >=140){
        alert("マンマミーア！残念、もう一回！！！！！！！");
        window.location.reload();
     }
},10);

document.addEventListener("keydown",function(event){
    jump();
});


// let myBirthTime=new Date('2005-12-17 12:30');
// function updateParagraph(){
// let now = new Date();
// let seconds = (now.getTime()-myBirthTime.getTime())/1000;
// document.getElementById('birth-time').innerText=
// '生まれてから'+seconds+'秒経過';
// }
// setInterval(updateParagraph,50);