let spielfeld =[];
let lochZeile =4;
let lochSpalte =4;

function generateFeld(){ // create the puzzle button after loading the page
    for(let zeile=1;zeile<5;zeile++){
        spielfeld[zeile]=[];
        for(let spalte=1;spalte<5;spalte++){
            let btn = document.createElement('button');
            if(zeile ==lochZeile && spalte ==lochSpalte){
                btn.innerHTML='&nbsp;';
            }else{
                btn.innerText=4*(zeile-1)+spalte;
            }
            btn.style.width='30px';
            btn.style.height='30px';
            btn.zeile=zeile;
            btn.spalte=spalte;
            btn.onclick=geklickt;

            document.getElementById('app-puzzle').appendChild(btn);
            spielfeld[zeile][spalte]=btn;
        }
        document.getElementById('app-puzzle').appendChild(document.createElement('br')); //Zeilenumbruch nach jeder Zeile
    }
}

function geklickt(){
    if(Math.abs(this.zeile-lochZeile) + Math.abs(this.spalte-lochSpalte) ==1){
        //Inhalt von this ins Loch schieben
		spielfeld[lochZeile][lochSpalte].innerText=this.innerText;
		//Koordinate des Lochs aktualisieren (ist jetzt an this Stelle)
		lochZeile=this.zeile;
		lochSpalte=this.spalte;
		//Inhalt vom neuen Loch leer machen
		this.innerHTML='&nbsp;';
		
    }
}
