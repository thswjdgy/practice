// function x(a) {
//     a = a+1;
//     document.write(a);
// }

// var cat = 1;

// cat = cat+1;    //cat 값은 2가 됨

// document.write(cat);    //cat 값 출력

// x(1);

// cat=cat+1;  //cat 값은 3가 됨

// cat=0;  //cat 값에 오류 값이 들어가버렸다고 가정하고 

// cat=cat+1;  //cat 값은 4가 됨

// document.write(cat);    //cat 값 출력


// 변수범위 설명

var a = 1;

function a() {
    var b = 100;
    document.write(b);
}