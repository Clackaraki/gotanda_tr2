let aa = {
    displayArea: document.getElementById('display-area'),
};
function showScore() {
    const totalScore = document.getElementById('score-message');
    if (quiz_1.answer.value == 'a') {
        totalScore.innerText = 'せいかい';
    }
    else
    {
        totalScore.innerText = 'ふせいかい';
    }}
