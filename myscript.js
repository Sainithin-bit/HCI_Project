var base;
var playpause=0;
function playfun(){
    playpause = playpause + 1;
    if(playpause===1){
        play();
        document.getElementById("play").classList.add("pause");
        
    }else if(playpause===2){
        document.getElementById("play").classList.add("pause");
        
        stop1();
    }

    
}
function play(){
    base=setInterval(timer, 10);//millisecond
     
}

function stop1(){
    classInterval(base);

}

//defualt
var millisecond=0;
var second=0;
var minute=0;
var hour=0;


//return values
var millisecondval=0;
var secondval=0;
var minuteval=0;
var hourval=0;


function timer(){
    millisecondval=updatetime(millisecond);
    secondval=updatetime(second);
    minuteval=updatetime(minute);
    hourval=updatetime(hour);

    millisecond= ++millisecond;
    if(millisecond===100){
        millisecond=0;
        second= ++second;
    }
    if(second===60){
        second=0;
        minute= ++minute;
    }
    if(minute===60)
    {
        minute=0;
        hour= ++hour;
    }

    $("#millisecond").text(millisecondval);
    $("#second").text(secondval);
    $("#minute").text(minuteval);
    $("#hour").text(hourval);

}
function resetfun(){
    millisecond=0;
    second=0;
    minute=0;
    hour=0;
    $("#millisecond").text("00");
    $("#second").text("00");
    $("#minute").text("00");
    $("#hour").text("00"); 

}

function updatetime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}

function stopfun(){
    $("#millisecond").text(millisecondval);
    $("#second").text(secondval);
    $("#minute").text(minuteval);
    $("#hour").text(hourval);
    clearInterval(base);
    
}

