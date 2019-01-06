function Kelime(dna){
    if(dna){
        this.dna=dna
    }else{
        this.dna=new DNA();
    }

    this.sağlık=0;

    var cumleArr;
    this.sağlıkÖlç=function(){
        this.sağlık=0;
        cumleArr=cümle.split("")
        for (let h = 0; h < cumleArr.length; h++) {
            cumleArr[h]=cumleArr[h].charCodeAt();
        }
        for (let i = 0; i < this.dna.genler.length; i++) {
            if(this.dna.genler[i]==cumleArr[i]){
                this.sağlık+=10;
            }
        }
        return this.sağlık;
    }
    this.goster=function(){
        return this.dna.oluşan
    }

}