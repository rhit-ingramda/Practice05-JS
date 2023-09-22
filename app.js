function f1(){
    button = document.getElementById("theButton");
    button.innerHTML = "Don't Click Me";
    button.disabled = "true";
}

function f2(){
    num = document.getElementById("theIncButton").innerHTML;
    console.log(num);
    if(num == "Increment Me!"){
        num = 0;
    }
    num = Number(num) + 1;
    document.getElementById("theIncButton").innerHTML = num; 
}

function f3(){
    document.getElementById("theDisButton").style.display = "none";
}