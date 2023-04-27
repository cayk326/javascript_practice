/**
 * Const, let等の変数宣言
//  */
// var val1 = "AAA";
// console.log(val1);

// //var変数は上書き可能
// val1 = "Updated";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "redefine";
// console.log(val1);

// //var変数は自由度が高すぎてバグを生みやすい

// let val2 = "AAA";
// console.log(val2);

// //letは上書きが可能
// val2 = "updated";
// console.log(val2);

// //letは再宣言不可
// //letで宣言された変数の場合は事前に再宣言であることをエラーとして検知できる
// let val2 = "redefine";

// const val3 = "AAA";
// console.log(val3);

// //constは上書きと再宣言不可

// val3 = "updated";

// const val3 = "redifine";

//constでもオブジェクトならばプロパティを変えれる。参照によって
// objectを定義するときはほとんどconstを使う
// const val4 = {
//   name: "AAA",
//   age: 100
// };

// console.log(val4);

// val4.name = "BBB";

// console.log(val4);
// val4.address = "JAPAN";
// console.log(val4);

//constで定義s他配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// // objectと同じく、constで定義しても中身を変更可能

// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// console.log(val5);

/**
 *
 * テンプレート文字列
 */
//文字列の中にjavascriptの変数を埋め込める

// const name = "Tom";
// const age = 28;
// //「私の名前はTomです。年齢は28さいです」と表示させる
// //従来方法 結合のたびに+を書く必要がありコードが長くなり読みづらい
// const message1 = "私の名前は" + name + "です。年齢は" + age + "さいです。";
// console.log(message1);

// //テンプレート文字列を用いた方法 よりシンプルになった${変数名}をつかう
// const message2 = `私の名前は${name}です。年齢は${age}さいです。`;
// console.log(message2);

/**
 * アロー関数 React頻出の関数表記法
 */

//従来の関数
// function func1(str) {
//   return str;
// }
//関数を変数の中に入れてつかう
// const func1 = function (str) {
//   return str;
// };

//アロー関数
// const func2 = (str) => {
//   return str;
// };

// 引数が一つの時はかっこを省略できる
// プロジェクトで表記ルール合わせた方が良い
// const func2 = str => {
//   return str;
// };

//関数の中が1行で終わるようなケースの場合returnを省略できる
//{}でかこったらreturnつけることを忘れないこと
// const func2 = (str) => str;

// console.log(func1("func1です"));
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
//下記のように省略できる
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "Tom",
//   age: 28
// };
// //毎回myProfile.nameなどと書くのは面倒だし、もっと階層が深くなると冗長になる
// //必要なのはmyProfileに入っているnameとageだけ

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}さいです。`;
// console.log(message1);

// //分割代入を使う
// //const{取り出したいプロパティ1, 取り出したいプロパティ2, ,,,} = 取り出したいプロパティが入っているオブジェクト
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}さいです。`;
// console.log(message2);

//分割代入は配列にも使うことができる

// const myProfile = ["Tom", "28"];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}さいです。`;
// console.log(message3);
// /**
//  * 配列の分割代入の時は左辺を配列にするために[]をつかう
//  * また、配列なので指定した受け取り手となる変数には配列に順番にアクセスした値がはいる
//  * nameはmyProfileの配列0番目、ageには1番目の値が代入される
//  * 順番が大事になる
//  * 分割代入は便利だが意味を知っていないと読めない
//  */
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}さいです。`;
// console.log(message4);

/**
 * デフォルト値
 */
//JSの場合、変数が何も入っていないとエラーを出さずにUndefinedという値で変数が初期化される
//バグを生みやすい
//もし変数に値が設定されていない場合に初期値を設定しておきたいケースが沢山ある
// const sayHello = (name) => console.log(`こんにちは${name}さん!`);
// sayHello();

//初期値を設定する
// const sayHello = (name = "Guest") => console.log(`こんにちは${name}さん!`);
// sayHello();
// sayHello("Tom"); //値を入れればその値が表示される

/**
 * スプレッド構文 ...ドットを三つ書く
 * いろいろなところで使える
 */

// //配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1); //配列の中身を順番に処理して展開
// // //下記のようなfor文のイメージ
// // for (const num of arr1) {
// //   console.log(num);
// // }
// //例えば、配列の中身を足して表示するケース
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// //これをスプレッド構文を使うと、、、
// sumFunc(...arr1); // ただし、配列の長さが2をこえるとおかしな処理を引き起こす

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// //普通に分割代入　冗長
// //const [num1, num2, num3, num4, num5] = arr2;
// //スプレッド構文を使う num1, num2 とそれ以外全部はarr3として
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
//配列のコピー、結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; //arr4と同じarr6

/**
 * 例えば、普通にarr6 = arr4とすると参照はarr4とarr6で同じなので
 * どちらかの変数に適用した変更が両方に反映される
 * 一方でスプレッド構文を使って新しい配列を生成すると参照も作り直されるので
 * どちらかに対して適用した変更が両変数に影響を及ぼすことはない
 */
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// //配列の結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map & filterを使った配列処理
 * これを使うことでfor文を使う必要がなくなった
 */

// const nameArr = ["田中", "山田", "Tom"];
//上記配列を順番に表示したいとき、従来はfor文を配列の末端まで走査し個々のインデックスにアクセスして
//表示していた. 下記では二種類のfor文を示す
// for (const name of nameArr) {
//   console.log(name);
// }
// console.log("-----------");
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
//mapの機能
/**
 * mapは配列に対して使える関数
 * map()のカッコ内にアロー関数を書いて仮引数をおいてその引数をそのままreturnする
 * nameArrの中身の値が順番にnameに入ってくる
 * そのままreturnしたり、追加の操作をしたりして新しい配列を生成
 */

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

//for文の時と同じように配列から名前を順番に表示する機能をmapを使って実装
//1行で書ける!
//nameArr.map((name) => console.log(name));

//filter ある条件に一致したものだけとりだし配列を生成
//ここでは奇数だけ取り出した配列を生成する
//filterのときにはreturnの後に条件式を書く
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

//配列のインデックスに応じた出力をするケース
// const nameArr = ["田中", "山田", "Tom"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`); //テンプレート文字列による出力
// }
// //mapで同じことをする
// //mapには一つ目の引数には実際の値、二つ目の引数にはインデックスが入っている
// //indexを使って何かしたいとき
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// Tom以外には「さん」を付けたいケース
// const nameArr = ["田中", "山田", "Tom"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "Tom") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時の処理 : 条件がFalseのときの処理
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "Input the number";
// console.log(formattedNum);

//関数のreturn部で三項演算子
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えてます" : "許容範囲内です";
// };

// console.log(checkSum(10, 40));

// || は左側がFalseならば右側を返す
// 下記のケースだと左側はnum=100でtrucyであり左側の値が返る
let num = 100;
let fee = num || "金額未設定です";
console.log(fee);

// 下記のケースは左側がFalsyなので右側の値が返る
num = null;
fee = num || "金額未設定です";
console.log(fee);

/**
 * いつも使うケースは下記のようにある変数を比較してtrueかfalseに応じて処理をかえる
 * 結局のところ||ならばどっちかがtrueならば||の機能によりifの条件式が必ずtrueになる
 * case1:
 *   false || true => 左側がfalseなので右側のtrueが返る
 * case2:
 *   true || false => 左側がtrueなので左側の値がそのまま返る
 *結局のところ||は左右のturcy/falcyを評価し、左側の値がtruecyならそのまま左側の値を返し、
 *Falscyなら右側の値を返す。右側の値は特に評価していない
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("Hey");
// } else {
//   console.log("Yea");
// }

//&のケース
/**
 * &&は左側がtrueなら右側を返す
 */
const num2 = 100;
const fee2 = num && "何か設定されました";
console.log(fee2);

const flag1 = true;
const flag2 = true;
if (flag1 && flag2) {
  console.log("Hey");
} else {
  console.log("Yea");
}
