const sankakubutton = document.getElementById('sankaku');
const hartbutton = document.getElementById('hart');
const starbutton = document.getElementById('star');
const snowbutton = document.getElementById('snow');
const sunbutton = document.getElementById('sun');
const umbrellabutton = document.getElementById('umbrella');
const thunderbutton = document.getElementById('thunder');
const moonbutton = document.getElementById('moon');
const cloudbutton = document.getElementById('cloud');
const enterbutton = document.getElementById('enter');
const deletbutton = document.getElementById('delet');
const end = document.getElementById("end");
sankakubutton.onclick = showExeCount;
hartbutton.onclick = showExeCount;
starbutton.onclick = showExeCount;
snowbutton.onclick = showExeCount;
sunbutton.onclick = showExeCount;
umbrellabutton.onclick = showExeCount;
thunderbutton.onclick = showExeCount;
moonbutton.onclick = showExeCount;
cloudbutton.onclick = showExeCount;
enterbutton.onclick = judgeTrue;
deletbutton.onclick = erasecode;
let click_count = 0;
// 問題作成
let symbol = ["sankaku", "hart", "ster", "snow", "sun", "umbrella", "thunder", "moon", "cloud"];
function arrayShuffle(array) {
  for (let i = (array.length - 1); 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array.slice(6);
}
const answer = arrayShuffle(symbol);
// console.log(arrayShuffle(symbol))

// 文字入力
let useranswers = []
function showExeCount(event) {
  // for (let game_count = 0; game_count > 9; game_count++) {
  if (click_count < 3) {
    let timeElement = document.getElementById("keyboardinput");
    let copy_element = event.target.cloneNode(false);
    timeElement.appendChild(copy_element);
    click_count = click_count + 1;
    onclick = this.disabled = true;
    // クリックされた要素の画像URLを取得してURLごとに  三角や星など識別子を取得する
    const src = event.target.getAttribute('src');
    let code = "";
    if (src == "https://iconbox.fun/wp/wp-content/uploads/850_ch_f.png") {
      code = "sankaku"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/553_me_f.png") {
      code = "hart"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/star_close_24.png") {
      code = "ster"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/159_w_24.png") {
      code = "snow"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/145_w_24.png") {
      code = "sun"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/155_w_24.png") {
      code = "umbrella"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/157_w_24.png") {
      code = "thunder"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/148_w_24.png") {
      code = "moon"
    }
    if (src == "https://iconbox.fun/wp/wp-content/uploads/141_w_24.png") {
      code = "cloud"
    }
    useranswers.push(code)
  }
  console.log(event.target)
  console.log(useranswers)
}
// 正解判定
let judgecount = 0
function judgeTrue() {
  if (click_count > 2) {
    console.log(answer)
    let hitcount = 0;
    let blowcount = 0;
    for (let i = 0; i < useranswers.length; i++) {
      if (useranswers[i] === answer[i]) {
        hitcount++;
      }
      if (answer.includes(useranswers[i]) && useranswers[i] !== answer[i])
        blowcount++;
    }
    const list = document.getElementById("yourguess")
    // 列の取得
    // console.log(list.children[0].children[0])
    // 列ごとに適した値を入れる
    // 1列目選択した画像を入れる
    list.children[judgecount].children[0].innerHTML = document.getElementById("keyboardinput").innerHTML
    // 2列目ヒットの値を入れる
    list.children[judgecount].children[1].innerText = hitcount
    // ３列目ブローの値を入れる
    list.children[judgecount].children[2].innerText = blowcount
    judgecount = judgecount + 1
    sankakubutton.disabled = false;
    hartbutton.disabled = false;
    starbutton.disabled = false;
    snowbutton.disabled = false;
    sunbutton.disabled = false;
    umbrellabutton.disabled = false;
    thunderbutton.disabled = false;
    moonbutton.disabled = false;
    cloudbutton.disabled = false;
    // const timeElement = document.getElementById("keyboardinput");
    // timeElement.remove();
    let changeHTML = document.getElementById("keyboardinput");
    changeHTML.innerHTML = '';
    useranswers.length = 0;
    console.log(hitcount)
    console.log(blowcount)
    if (click_count = 2) {
      click_count = 0;
      endGame(hitcount);
    }
  }
}
// }
function erasecode() {
  let changeHTML = document.getElementById("keyboardinput");
  changeHTML.innerHTML = '';
  useranswers.length = 0;
  sankakubutton.disabled = false;
  hartbutton.disabled = false;
  starbutton.disabled = false;
  snowbutton.disabled = false;
  sunbutton.disabled = false;
  umbrellabutton.disabled = false;
  thunderbutton.disabled = false;
  moonbutton.disabled = false;
  cloudbutton.disabled = false;
  if (click_count = 2) {
    click_count = 0;
  }
}
function endGame(hitcount) {
  if (hitcount === 3) {
    end.children[0].textContent = "正解!!";
    showEnd();
  } else if (judgecount === 10) {
    end.children[0].textContent = "残念…";
    showEnd();
  }
}
function showEnd() {
  end.classList.remove("hide");
  end.animate({ opacity: [0, 0.7] }, { duration: 1500 });
  end.children[1].textContent = useranswers.join("");
  end.children[2].textContent = "もう一度プレイ";
}
let header = document.getElementById('tytol');
let degree = 0;
function rotateHeader() {
  degree = degree + 6;
  degree = degree % 360;
  if (degree === 90) {
    header.setAttribute('class', 'back');
  } else if (degree === 270) {
    header.setAttribute('class', 'face');
  }
  header.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHeader, 50);