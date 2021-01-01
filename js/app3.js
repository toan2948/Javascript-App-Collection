    /* App 3 */
    function umwandeln(){
        let a=document.getElementById('umzuwandeln').value;
        let b=document.getElementById('umwandler').value;
        document.getElementById('umwandeln-result').innerText ='Result: ' + a*b;
        document.getElementById('umzuwandeln').value ='';
    }