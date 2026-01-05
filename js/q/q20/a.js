// 문20	반복문 - 별찍기

/*

**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *

이런 모양 나오게

*/

var z = 0;
for(var i=1; i<=10; i=i+1){
    
    //for(var k = 1; k <= i - 1; k=k+1){

    for(var k=1; k <= z; k=k+1){
        document.write("&nbsp;")
    }
    z = z + 1;


    for(var j=10; j>=i; j=j-1){
        document.write("*");
    }
    document.write("<br>");
}