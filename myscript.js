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
var correct=0;
var wrong=0;
var locater=0;
var level1=["red", "orange", "voilet", "green", "brown", "yellow", "orange"," blue", "green", "orange", "blue",
            "green", "red", "voilet", "orange", "green", "brown", "yellow", "brown", "yellow", "orange", "blue", "green", 
             "red", "orange", "voilet", "ornage", "green", "red", "orange", "voilet", "orange", "green", "brown", "yellow", 
            "orange", "blue", "green", "red"];
function red(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}
function blue(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}
function green(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}
function orange(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}
function violet(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}
function yellow(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}
function brown(){
    if(level1[locater]=="red"){
        correct++;
    }
    locater++;
    barchart();
}

anychart.onDocumentReady(function barchart() {
 
    var data = {
        header: ["", "Score"],
        rows: [
          ["Correct", 200],
          ["Wrong", 10  ]
    ]};

    // create the chart
    var chart = anychart.bar();

    // add the data
    chart.data(data);

    // set the chart title
    chart.title("The deadliest earthquakes in the XXth century");

    // draw
    chart.container("visulization");
    chart.draw();
  });
