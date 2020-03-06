// 此练习文件夹是按技术胖的es6教学写的

// npm init -y  初始化一个json
// npm install -g babel-cli（建议用cnpm）
// cnpm install --save-dev babel-preset-es2015 babel-cli

// 在根目录下建 .babelrc文件(苹果系统自行百度)
// {
//     "presets": [
//         "es2015"
//     ],
//     "plugins": [
        
//     ]
// }

// package中的scripts中增加：
// "build": "babel src -d dist"
// 利用npm run build即可进行es6转换为es5


let a = 1;
console.log(a);//1

//对象扩展运算符
function name(...args) {
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
}
name(4,5,6);//4 5 6 undefined

//reset ...运算符
function name1(first,...args){
    console.log(args.length);
    console.log(args[0]);
}
name1(1,2,3,4,5);//4 2

//includes
var arr = [1,2,3,4,5,6];
console.log(arr.includes(5));//true
var str = "郭坤是为位同志，郭坤值得我们学习，我们最敬爱的人--郭坤";
console.log(str.includes("郭坤"));//true
console.log(str.startsWith("郭坤"));//true
console.log(str.endsWith("郭坤"));//true

//模板字符串
var names = "郭坤";
var toatle = `${names}是为位好同志，${names}值得我们学习`;
console.log(toatle);//郭坤是为位好同志，郭坤值得我们学习

//判断是否是数字
let isNumber=11;
console.log(Number.isFinite(isNumber));//true
console.log(Number.isFinite("郭坤"));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false

//判断是否是非数字
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("郭坤"));//false
console.log(Number.isNaN(8));//false

//判断是否是整数
console.log(Number.isInteger(88));//true
console.log(Number.isInteger(88.5));//false

//es6中最大值是
const bigNumber = Math.pow(2,53)-1;
console.log(bigNumber);//9007199254740991
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.isSafeInteger(bigNumber));//true

//array.form --把json转换为数组
let arrayForm = {
    "0":"guokun",
    "1":"郭坤",
    "2":"大神",
    length:3
}
console.log(Array.from(arrayForm));//["guokun", "郭坤", "大神"]

//array.of --转换为数组
let arrayof = Array.of(1,2,3,4,5,6);
let arrayof1 = Array.of("郭坤","guokun");
console.log(arrayof);//[1, 2, 3, 4, 5, 6]
console.log(arrayof1); //["郭坤", "guokun"]

//find() 实例方法
let arrfind = [1,2,3,4,5,6,7];
console.log(arrfind.find(function (value, index, arr){
    return value > 6;
}))//7

let arrfind1 = ["guokun","郭坤","大神"];
console.log(arrfind.find(function (value, index, arr) {
    return value == "郭坤";
}))//undefined