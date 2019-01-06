var harfsayisi;
var cümle;
var nufus;
var k1;

function setup(){
   var canvas=createCanvas(1100, 310)
    cümle="I m genetic Algorithm";
    harfsayisi=cümle.length;
    nufus=new Nüfus();
    canvas.parent('sketch-holder');
}

function draw(){
    document.getElementById("start").onclick=function(){
        var canvas=createCanvas(1100, 310)
        cümle= document.getElementById("phrase").value;
        harfsayisi=cümle.length;
        nufus=new Nüfus();
        canvas.parent('sketch-holder');
        frameCount=0;
    }
    if(!nufus.ulaşıldı){
        background(1)
        nufus.çalıştır();
        nufus.değerlendir();
        nufus.seleksiyon(); 
    }
}

