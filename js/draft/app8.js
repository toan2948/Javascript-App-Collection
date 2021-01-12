
//klassen
//  import { Bild } from './Bild.js';
// let bild1= new Bild('auto.jpg',1);
//get, post
function sendGET(){
    let data = document.getElementById('input-for-GET').value;
    location.href ='DatenVerschicken/empfang_get.php?data=' +data;
}
function eingabenPruefen() {
    //TODO prüfen, ob der Nutzer einen Nutzernamen eingetippt hat
    if(document.getElementById('agb_akzeptiert').checked) {
        document.getElementById('anmeldeformular').submit();
    } else {
        alert('Sie müssen die AGB akzeptieren');
    }
}

