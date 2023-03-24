const quizData = [

    {

        title:"ブルーロックの問題です。鬼ごっこで潔にボールを当てたのは誰？",

        choices:[

            { id:1, value:"國神練介"},

            { id:2, value:"吉良涼介"},

            { id:3, value:"蜂楽廻"},

            { id:4, value:"凪誠士郎"},

        ],

        correctId: 1,

    },

    {



    }

];



const quizSentence = document.getElementById('quiz_sentence');

const quizAnswerSelect = document.getElementById('quiz_answer_select');

const quizSendButton = document.getElementById('quiz_send_button');

const quizResult = document.getElementById('quiz_result');



const useQuizData = quizData[0];



// 選択肢

for (const choice of useQuizData.choices) {

    quizAnswerSelect.innerHTML += `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}"><label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`;

}





// 問題文

quizSentence.innerHTML = `<p>${useQuizData.title}</p>`;


// 1. ボタン押下時
quizSendButton.onclick = ev => {

    // 2. 選択肢を全部取得しチェック状態を確認
    for (const element of quizAnswerSelect.querySelectorAll("input")) {

        if (element.checked) { 

            // 3. 正誤判定
            const result = element.id == useQuizData.correctId;

            const str = result ? "正解です" : "不正解です";

            quizResult.innerHTML = `<p>${str}</p>`;

        }

    }
}