let atai = 0;
const breadButton = document.getElementById('bread');
const riceButton = document.getElementById('rice');
const fishButton = document.getElementById('fish');
const meatButton = document.getElementById('meat')
const vegetableButton = document.getElementById('vegetable');
const yogurtButton = document.getElementById('yogurt');
const orengeButton = document.getElementById('orenge');
const teeButton = document.getElementById('tee');

const goukei = document.getElementById('goukei');

    function goClick() {
        // クリック時の動作を指定できます
        location.href = "http://www.cman.jp/"}

breadButton.onclick = function () {
    ni = 96
    atai = atai + ni
    console.log(atai)
    goukei.innerText = atai
    // document.write(atais)
}

riceButton.onclick = function () {
    sann = 555
    atai = atai + sann
    console.log(atai)
    goukei.innerText = atai
}


fishButton.onclick = function () {
    yonn = 0
    atai = atai + yonn
    console.log(atai)
    goukei.innerText = atai
}


meatButton.onclick = function () {
    go = 1686
    atai = atai + go
    console.log(atai)
    goukei.innerText = atai
}

vegetableButton.onclick = function () {
    roku = 30

    atai = atai + roku
    console.log(atai)
    goukei.innerText = atai
}
yogurtButton.onclick = function () {
    nana = 50
    atai = atai + nana
    console.log(atai)
    goukei.innerText = atai
}

orengeButton.onclick = function () {
    hachi = 168
    atai = atai + hachi
    console.log(atai)
    goukei.innerText = atai
}

teeButton.onclick = function () {
    ku = 12.8
    atai = atai + ku
    console.log(atai)
    goukei.innerText = atai
}







/*const rice = document.getElementById('rice');
rice.onclick = function(){
    console.log('ボタンが押されました')
atai = atai + 20
console.log(atai)
};

document.write(atai);
function bread(){
    document.getElementById("result").
    innerHTML = "10";
}*/
