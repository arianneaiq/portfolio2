//poc1
function changeText(){
    document.getElementById('demo').innerHTML = 'Hello JavaScript!'
    document.getElementById('demo').style.fontSize='35px'
    document.getElementById("demo").style.display = "block"
} 

//poc2
function showTime(){
    let date = new Date();
    let hour= date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0 - 59
    let sec = date.getSeconds(); // 0 - 59
    let  session = "AM";
    
    if(hour < 12){
        session = "AM";
    } else
    
    if(hour >= 12){
        session = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    let time = hour + ":" + min + ":" + sec + " " + session;
    document.getElementById("ClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
}

showTime();

//poc3
function calculate(){
    let firstNumber = document.getElementById('nummer1');
    let secondNumber = document.getElementById('nummer2');
    let result = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    
        alert("de som van " + firstNumber.value + "+" + secondNumber.value + "=" + result);
    }




