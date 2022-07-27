var likenumber1 = document.querySelector("#likenumber1");
var likenumber2 = document.querySelector("#likenumber2");
var likenumber3 = document.querySelector("#likenumber3");

console.log (likenumber1.textContent);
let likecount1 = (likenumber1.textContent);
let likecount2 = (likenumber2.textContent);
let likecount3 = (likenumber3.textContent);

function moreLikes1(element) {
    ++likecount1;
    likenumber1.textContent = likecount1;  

}
function moreLikes2(element) {
    ++likecount2;
    likenumber2.textContent = likecount2;  

}
function moreLikes3(element) {
    ++likecount3;
    likenumber3.textContent = likecount3;  

}