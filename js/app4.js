 /*App 4 */
 let count=0;
 let timer=null;

 function timedFunction(){
     timer=setInterval(function(){
         count++;
         document.getElementById('count').innerText = 'now counting: '+ count;
     },300);
 }
 function stopCount(){
     clearInterval(timer);
     document.getElementById('btn-counter').value='Continue to count';
 }
