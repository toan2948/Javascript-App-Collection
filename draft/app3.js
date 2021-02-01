    /* App 3 */
    function umwandeln(){
        let a=document.getElementById('umzuwandeln').value;
        let b=document.getElementById('umwandler').value;
        document.getElementById('umwandeln-result').innerText ='Result: ' + a*b;
        document.getElementById('umzuwandeln').value ='';
    }

  /*  HTML code
  
  <div class='div-border' id='app3'>
    <h3>Umwandler - Converter</h3>
    <input type="number" name="" id="umzuwandeln">
    <select name="" id="umwandler">
        <option value="10">cm to mm</option>
        <option value="0.1">mm to cm</option>
    </select>
    <input type="button" value= 'Convert' onclick='umwandeln()'>
    <p id='umwandeln-result'></p>
</div> */