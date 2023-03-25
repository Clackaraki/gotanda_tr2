let counter = 0;



function showExeCount() {

  let timeElement = document.getElementById("keyboardinput");

  counter++;

  timeElement.innerText = counter;



  // 赤を表示するかどうか

  if (   counter%2===0  ) {

    timeElement.setAttribute('class', 'red');
    
} else {
    
    timeElement.setAttribute('class', 'blue');

  }

}



document.onkeydown = showExeCount;



let wordgame = {

  question: "りんごの英単語は？",

  correct: "apple",

  evaluation: function (answer) {

    return wordgame.correct == answer;

  }

};



console.log(wordgame.evaluation("apple"));