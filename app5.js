 /* App 5: run an array of Bild */
        
 let bildArray =[
    'auto.jpg',
    '1elefant.jpg',
    '2elefant.jpg',
    '3elefant.jpg',
    '5elefant.jpg'
];
let anzahlElefant =[];
anzahlElefant['auto.jpg']=1;
anzahlElefant['1elefant.jpg']=1;
anzahlElefant['2elefant.jpg']=2;
anzahlElefant['3elefant.jpg']=3;
anzahlElefant['5elefant.jpg']=5;

let index =-1;
function runBildArray(){
    index=(index+1)%bildArray.length;
    document.getElementsByClassName('bild-array')[0].src ='bilder/' + bildArray[index] ;
    document.getElementsByClassName('anzahlElefant')[0].innerText='Number of elefant in Bild = '+ anzahlElefant[bildArray[index]];
}