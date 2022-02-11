
window.onload = function(){

    var seconds = 00
    var tens = 00
    var appendSeconds = document.getElementById("tens")
    var appendTens = document.getElementById("seconds")
    var btnStart = document.getElementById("btn-start")
    var btnStop = document.getElementById("btn-stop")
    var btnReset = document.getElementById("btn-reset")
    var interval;

    btnStart.onclick = function(){
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }
    btnStop.onclick = function(){
        clearInterval(interval)
    }
    btnReset.onclick = function(){
        clearInterval(interval)
        tens = "00"
        seconds = "00"

        appendSeconds.innerHTML = seconds
        appendTens.innerHTML = tens
    }

    function startTimer(){
        tens++
        if(tens <=9){
            appendTens.innerHTML = "0" + tens 
        }
        if(tens > 9){
            appendTens.innerHTML = tens 
        }
        if(tens > 99){
            console.log("seconds")
            seconds++
            appendSeconds.innerHTML= "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds
        }
    }
}