/*App 1 */
function popUp(){ // Function for inputting some words in a text box
    let a = document.getElementById('etwas-to-show').value;
    if(a.length ==0){
        alert('bitte etwas eingeben');
    }
    else{
    document.getElementById('show-etwas').innerText= a;
    }
    document.getElementById('etwas-to-show').value ='';
}     

function verstecken(){ // Function for hiding an element (for example: <p>) 
    document.getElementById('test').style.display='none';
}

function anzeigen(){   // Function for showing an hidden element (for example: <p>) 
    document.getElementById('test').style.display='block';
}

function hinUndHer(){  // Function for hiding ans showing an element (for example: <p>) 
    let a=document.getElementById('test').style.display;
    let b =document.getElementById('test');
    if(a =='none'){
        //a ='block'; does not work
        b.style.display ='block';
    }
    else {
        b.style.display ='none';   
    }
}
