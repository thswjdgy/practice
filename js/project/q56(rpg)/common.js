/*
    공통함수들을 모아놓음
*/
function dw(str){
    document.write(str);
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}

// ▼ 이 함수가 빠져 있었습니다. 추가해주세요!
function r(n){
    return Math.floor(Math.random() * n) + 1; 
}