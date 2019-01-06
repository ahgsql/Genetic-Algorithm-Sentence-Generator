function Nüfus(){
    this.kelimeler=[];
    this.nufusu=950;
    this.çiftleşecekler=[];
    this.ulaşıldı=false
    for(let i =0; i<this.nufusu ; i++){
        this.kelimeler.push(new Kelime());
    }
    
      this.değerlendir=function(){
        var maxSağlık=0;
        for (let i = 0; i < this.nufusu; i++) {
            this.kelimeler[i].sağlıkÖlç();
            if (this.kelimeler[i].sağlık>maxSağlık) {
                maxSağlık=this.kelimeler[i].sağlık;
            }
        }

       for (let i = 0; i < this.nufusu; i++) {
            this.kelimeler[i].sağlık =map(this.kelimeler[i].sağlık,0,harfsayisi,0,harfsayisi-10)
        }
        this.çiftleşecekler=[];
        for (let i = 0; i < this.nufusu; i++) {
            var çokluk=this.kelimeler[i].sağlık*10
            for (let v = 0; v < çokluk+1; v++) {
                this.çiftleşecekler.push(this.kelimeler[i])
            }
        }
    }
    this.seleksiyon=function () {
        var yenikelimeler=[];
        for(var i=0;i<this.kelimeler.length;i++){
            var Anne=random(this.çiftleşecekler).dna;
            var Baba=random(this.çiftleşecekler).dna;
            var çocuk=Anne.çiftleşti(Baba);
            çocuk.mutasyon()
            yenikelimeler[i]=new Kelime(çocuk)
        }
        this.kelimeler=yenikelimeler;
    }
this.eniyiler=function(){

}
var gosterici=createP();

    this.çalıştır=function(){
       var oluşanlar="";

        var sayi=0;
        var enguclusu;
       for(let i =0; i< this.kelimeler.length ; i++){
         if(this.kelimeler[i].sağlıkÖlç()>sayi) {
             sayi=this.kelimeler[i].sağlıkÖlç();
             enguclusu=this.kelimeler[i];
         }else{
            enguclusu=this.kelimeler[0];
         }
      }
      if(enguclusu.dna.oluşan==cümle){
        this.ulaşıldı=true;
        fill(240,115,5)
        textSize(35)
        text("Max Fitness: " + enguclusu.sağlık/10 + " Chars / "+ harfsayisi , width/2 , height/4*3)
        fill(100,255,100)
        text("Evolution " + frameCount, width/2 , height/4*3.5)

    }
      fill(255)
      textAlign(CENTER, CENTER)
      textSize(29)
      text(enguclusu.dna.oluşan, width/2 , height/2)
     
      textSize(20)
      if(enguclusu.sağlık/10!=harfsayisi){
        fill(240,115,5)
        text("Max Fitness: " + enguclusu.sağlık/10 + " Chars / "+ harfsayisi , width/2 , height/4*3)
        fill(100,255,100)
        text("Evolution " + frameCount, width/2 , height/4*3.5)

      }else{

      }
    
    } 
}