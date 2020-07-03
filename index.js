function printGreeting(msg, alertGreet){
    if(msg == 'evening'){
        evening(alertGreet);
    }
    else if(msg == 'morning'){
        morning(alertGreet);
    }
    else{
        night(alertGreet);
    }
}

function alertGreet(msg){
    alert(msg);
}

function morning(alertGreet){
    alert("Good Morning");
    alertGreet("hello world");
}

function evening(alertGreet){
    alert("Good Evening");
    alertGreet("hello world");
}

function night(alertGreet){
    alert("Good Night");
    alertGreet("hello world");
}

printGreeting('evening', alertGreet);