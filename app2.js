  /* App 2: Creating element from a function */
  function GUIerstellen(){
    let div = document.createElement('input');
    div.type ='button';
    div.value ='ein erstellt button';
    div.id='testGUIFunction';
    div.onclick=testGUIFunction;
   // document.body.appendChild(div);
   document.getElementById('app2').appendChild(div);

}
function testGUIFunction(){
    alert('you have created a button');
    let h =document.createElement('h2');
    let t =document.createTextNode('A newly created element h2');
    h.appendChild(t);
    document.getElementById('app2').appendChild(h);
}
