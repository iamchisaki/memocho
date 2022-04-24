const timer = document.getElementById("timer") ; 
const start = document.getElementById("start") ; 
const Stop = document.getElementById("stop") ;
const reset = document.getElementById("reset") ;

function run() { 
 time = 0; 
 min  = 0;
 sec  = 0;
 mSec = 0;
}

function stop() { 
    clearInterval(tm); 
} 

function disp() { //時間表示 
    mSec++;
    if (mSec >= 100) {
      sec++;
      mSec = 0;
    }
    if (sec >= 60) {
      min++;
      sec = 0;
    }


    // substrで桁数調整
    // substr(-2)で文字列の末尾2文字を取り出す
    // 1桁の場合 '0'+1 → '01' → '01'
    // 2桁の場合 '0'+10→'010' → '10'
    //document.form_sw.count.value
timer.innerHTML= ('0'+min).substr(-2) + ":" + ('0'+sec).substr(-2) + ":" + ('0'+mSec).substr(-2); 
} 

document.getElementById("button").onclick = function() {
setInterval(disp)
};