let chizulinkElement = document.getElementById("chizu");
console.log(chizulinkElement)


myTable = new Array(
    "boudai.html",	// ランダム移動先
    "boueiika.html",	// ランダム移動先
    "rikuzyou.html",	// ランダム移動先

);

myRnd = Math.floor(Math.random() * myTable.length);	// 0～(URLの数-1)の乱数を求める

chizulinkElement.href = myTable[myRnd];