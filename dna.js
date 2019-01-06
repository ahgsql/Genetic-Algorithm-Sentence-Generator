function DNA(gen){
    var harfler=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z",".",",","?"," ","A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z","w","x","q","X","Q","W"]
  
    if(gen){
        this.genler=gen;
    }else{
         this.genler=[];
        for (var i = 0;  i< harfsayisi; i++) {
            this.genler[i]=random(harfler).charCodeAt()
        }
    }

        this.oluşan="";
        this.orjinal=cümle;
        for (var i = 0;  i< this.genler.length; i++) {
            this.oluşan+= String.fromCharCode(this.genler[i])
        }

        this.çiftleşti=function (eş) {
            var yenigenler=[];
            var orta=floor(random(this.genler.length))
            for(var i=0;i<this.genler.length;i++){
                if(i<orta){
                    yenigenler[i]=this.genler[i];
                }else{
                    yenigenler[i]=eş.genler[i];
                }
            }
            return new DNA(yenigenler);
        }
        this.mutasyon=function () {
            for (let i = 0; i < this.genler.length; i++) {
                if(random(1)<0.01){
                  this.genler[i]=random(harfler).charCodeAt()

                }
            }
        }

}