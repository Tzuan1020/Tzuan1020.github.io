
let text ="name:YanWeiChen age:19 job:student email:yan10110614@gmail.com";

let re1=/[a-z]+/g;
let re2=/[0-9]+/g;
let re3=/([a-z0-9A-Z]+)/g;
let re4=/([a-z0-9A-Z]+)/;
let re5=/:([a-z0-9A-Z]+)/g;
let re6 = /:\d+/g; //符合數字 [0-9]
let re7 = /:\D+/g; //符合非數字 [^0-9]
let re8 = /\w+@[\w\.]+/g;  // \w=包含數字字母與底線，等同於[A-Za-z0-9_]
let re9 = /\w+@[a-z]+\.[a-z.]+/g; 

console.log(text.match(re1));
console.log(text.match(re2));
console.log(text.match(re3));
console.log(text.match(re4));
console.log(text.match(re5));
console.log(text.match(re6));
console.log(text.match(re7));
console.log(text.match(re8));
console.log(text.match(re9));