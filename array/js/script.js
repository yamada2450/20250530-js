//配列の宣言
let sampleArray = new Array();

//配列の要素
let fruits = ["リンゴ","バハマ","ブドウ"];

//配列全体を出力
console.log(fruits);

//配列の要素を出力　添字/添え字
console.log(fruits[0]); //りんご

//配列の要素を追加
fruits.push("梨");
console.log(fruits);

fruits.unshift("桃");
console.log(fruits);
console.log(fruits[0]);

//配列の要素を変更
fruits[4] = "パイン"; //添え字を指定して要素を変更
console.log(fruits);