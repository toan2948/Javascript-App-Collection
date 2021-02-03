let hour ='';
let minute ='';
let countDown ='';
let h='';
let m ='';
let s='';
let audio;

//füge 0 vor Minuten, Sekunden falls sie als 10 kleiner sind
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//zeigen die aktuelle Zeit
function startTime() {
  let d = new Date();
  h=d.getHours();
  m =d.getMinutes();
  s=d.getSeconds();
  m= checkTime(m);
  s= checkTime(s);
  document.getElementById('time').innerText= h + ':'+m+':'+s;
}
// erzeugen den Select Bereich für Stunde und Minuten
function generateSelect(){
  let html ='';
  html+=  "<select id='select-hour'>";
  for(let i=0;i<25;i++){
    html +=  '<option value="'+i +'">'+i+'</option>';
  }           
  html+='</select>' +':';
  document.getElementById('hour').innerHTML=html;
  html='';
  html+=  "<select id='select-minute'>";
  for(let i =0;i<60;i++){
    html +=  '<option value="'+i +'">'+i+'</option>';
  }           
  html+='</select>';
  document.getElementById('minute').innerHTML=html;
}

//füge ein Change event zu select-hour, um Info über Stunde zu nehmen
document.addEventListener('change',function(e){
  if(e.target && e.target.id== 'select-hour'){
        hour =document.getElementById('select-hour').value;
   }
});

document.addEventListener('change',function(e){
  if(e.target && e.target.id== 'select-minute'){
        minute =document.getElementById('select-minute').value;
   }
});

audio = new Audio('alarm.mp3');
function setAlarm(){
  countDown = (hour-h)*3600 + (minute-m)*60;
  if(countDown <=0){
      alert('die alamierende Zeit ist vorbei');
  } else {
    let timer = setInterval(function(){
      countDown--;
      document.getElementById('show-timeDown').innerHTML=countDown + ' :second(s) left'
      if(countDown==0){
        clearInterval(timer); //stoppt timer
        document.getElementById('show-timeDown').innerHTML='Alarmed!!!';
        audio.play();
        let btnStop = document.getElementById('stop-alarm');
        btnStop.style.display='inline'; //zeigen die 'Stop alarm' Taste
        btnStop.value='Stop Alarm';
        //füge ein click event zu die 'Stop-alarm' Taste
        btnStop.addEventListener("click", turnoffAlarm);
        document.getElementById('set-alarm').style.display='none';
      }
    },10);
  }
  
}
function turnoffAlarm(){
  audio.pause();
  document.getElementById('set-alarm').style.display='inline';
  document.getElementById('stop-alarm').style.display='none';
  document.getElementById('show-timeDown').innerHTML='';
}

