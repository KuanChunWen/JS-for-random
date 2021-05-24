//0~100 隨機數字炸彈
let ans = Math.floor(Math.random()*100);
let n1 = 0;
let n2 = 99;

while(true){
    let input = prompt("請輸入一個" + n1 + "~" + n2 + "的數字:");

    if(input < n1 || input > n2){
        alert("請輸入正確範圍內數字!!");
        continue;
    }    

    if ( input == ans){
        alert("你猜中炸彈數了!炸彈數字是:" + ans);
        break
    }
    else if(input <= ans){
        n1 = input;        
    }
    else if(input > ans){
        n2 = input;
    }
}