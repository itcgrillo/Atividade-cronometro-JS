
let h1 = document.querySelector("h1")
let cron
let number = 0

function start() {
    cron = setInterval(function(){
        number++
        h1.innerHTML = number
    }, 1000)
}

function stop() {
    clearInterval(cron)
}




