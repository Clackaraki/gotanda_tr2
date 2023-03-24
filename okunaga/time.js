let myBirthTime=new Date('2005-12-17 12:30');
function updateParagraph(){
let now = new Date();
let seconds = (now.getTime()-myBirthTime.getTime())/1000;
document.getElementById('birth-time').innerText=
'生まれてから'+seconds+'秒経過';
}
setInterval(updateParagraph,50);