/* main.js */

window.onload = function() {

    // -------------------------------------------------------
    // 1. 번호 뽑기 (초보자 스타일: 변수 하나하나 저장)
    // -------------------------------------------------------

    // 중복 없이 숫자 6개 뽑아주는 도구 (이건 복잡하니 그냥 씁니다)
    function getNumbers() {
        var nums = [];
        while(nums.length < 6){
            var n = Math.floor(Math.random() * 45) + 1;
            if(nums.indexOf(n) == -1) {
                nums.push(n);
            }
        }
        return nums;
    }

    // 내 번호 뽑아서 변수에 하나씩 넣기 (p1 ~ p6)
    var myArr = getNumbers();
    var p1 = myArr[0];
    var p2 = myArr[1];
    var p3 = myArr[2];
    var p4 = myArr[3];
    var p5 = myArr[4];
    var p6 = myArr[5];

    // 컴퓨터 번호 뽑아서 변수에 하나씩 넣기 (r1 ~ r6)
    var comArr = getNumbers();
    var r1 = comArr[0];
    var r2 = comArr[1];
    var r3 = comArr[2];
    var r4 = comArr[3];
    var r5 = comArr[4];
    var r6 = comArr[5];

    var html = ""; // html 글자를 저장할 변수

    // 내 번호 화면 만들기
    html += "<h2>내 번호</h2>";
    html += "<div class='dice my-dice'>" + p1 + "</div>";
    html += "<div class='dice my-dice'>" + p2 + "</div>";
    html += "<div class='dice my-dice'>" + p3 + "</div>";
    html += "<div class='dice my-dice'>" + p4 + "</div>";
    html += "<div class='dice my-dice'>" + p5 + "</div>";
    html += "<div class='dice my-dice'>" + p6 + "</div>";

    // 컴퓨터 번호 화면 만들기
    html += "<h2>컴퓨터 번호</h2>";
    html += "<div class='dice'>" + r1 + "</div>";
    html += "<div class='dice'>" + r2 + "</div>";
    html += "<div class='dice'>" + r3 + "</div>";
    html += "<div class='dice'>" + r4 + "</div>";
    html += "<div class='dice'>" + r5 + "</div>";
    html += "<div class='dice'>" + r6 + "</div>";
    
    document.body.innerHTML = html;


    var win = 0; // 맞춘 개수

    // p1 이 r1~r6랑 같은지 검사
    if(p1 == r1) win = win + 1;
    if(p1 == r2) win = win + 1;
    if(p1 == r3) win = win + 1;
    if(p1 == r4) win = win + 1;
    if(p1 == r5) win = win + 1;
    if(p1 == r6) win = win + 1;

    // p2 검사
    if(p2 == r1) win = win + 1;
    if(p2 == r2) win = win + 1;
    if(p2 == r3) win = win + 1;
    if(p2 == r4) win = win + 1;
    if(p2 == r5) win = win + 1;
    if(p2 == r6) win = win + 1;

    // p3 검사
    if(p3 == r1) win = win + 1;
    if(p3 == r2) win = win + 1;
    if(p3 == r3) win = win + 1;
    if(p3 == r4) win = win + 1;
    if(p3 == r5) win = win + 1;
    if(p3 == r6) win = win + 1;

    // p4 검사
    if(p4 == r1) win = win + 1;
    if(p4 == r2) win = win + 1;
    if(p4 == r3) win = win + 1;
    if(p4 == r4) win = win + 1;
    if(p4 == r5) win = win + 1;
    if(p4 == r6) win = win + 1;

    // p5 검사
    if(p5 == r1) win = win + 1;
    if(p5 == r2) win = win + 1;
    if(p5 == r3) win = win + 1;
    if(p5 == r4) win = win + 1;
    if(p5 == r5) win = win + 1;
    if(p5 == r6) win = win + 1;

    // p6 검사
    if(p6 == r1) win = win + 1;
    if(p6 == r2) win = win + 1;
    if(p6 == r3) win = win + 1;
    if(p6 == r4) win = win + 1;
    if(p6 == r5) win = win + 1;
    if(p6 == r6) win = win + 1;


    // 결과 출력
    var resultDiv = document.createElement("div");
    resultDiv.className = "result-box";
    resultDiv.innerHTML = "맞춘 개수: " + win + "개";
    
    document.body.appendChild(resultDiv);
}