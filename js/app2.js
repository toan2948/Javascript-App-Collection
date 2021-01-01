  /* App 2: Creating element from a function */
  function GUIerstellen(){
    let div = document.createElement('input');
    div.type ='button';
    div.value ='Click to generate a h2 element';
    div.id='testGUIFunction';
    div.onclick=testGUIFunction;
   // document.body.appendChild(div);
   document.getElementById('app2').appendChild(div);

}
function testGUIFunction(){
    let h =document.createElement('h2');
    let t =document.createTextNode('A newly created element h2');
    h.appendChild(t);
    document.getElementById('app2').appendChild(h);
}
