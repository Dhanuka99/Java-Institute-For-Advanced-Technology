function key(event){
    if(event.which == 13){//enter
        if(rw == 0){
            rw = setInterval(run,100);
            rs.play();
        }
        


    }if(event.which == 32){//space
        clearInterval(rw);
        rw = 0;
        rs.pause();
    }
}

var rs = new Audio("run.mp3");
rs.loop = true;

var rw = 0;
var r = 1;
function run(){
    r = r + 1;
    if(r==9){
        r=1;
    }
    var rimg = document.getElementById("boy");
    rimg.src = "img/Run ("+r+").png";
    
}