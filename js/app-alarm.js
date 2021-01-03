function generateSelect(){
  let html ='';
  html+=  "<select id='select-hour' onchange='selectHour()'>";
  for(let i =0;i<13;i++){
    html +=  '<option value="'+i +'">'+i+'</option>';
  }           
  html+='</select>' +':';
  document.getElementById('hour').innerHTML=html;
  html='';
  html+=  "<select id='select-minute' onchange='selectMinute()'>";
  for(let i =0;i<60;i++){
    html +=  '<option value="'+i +'">'+i+'</option>';
  }           
  html+='</select>';
  document.getElementById('minute').innerHTML=html;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let hour ='';
let minute ='';
let timeDown ='';
let h='';
let m ='';
let s='';

function startTime() {
  let d = new Date();
   h=d.getHours();
   m =d.getMinutes();
   s=d.getSeconds();
  m= checkTime(m);
  s= checkTime(s);
  document.getElementById('time').innerText=
  h + ':'+m+':'+s;
}


document.addEventListener('change',function(e){
  if(e.target && e.target.id== 'select-hour'){
        hour =document.getElementById('select-hour').value;
   }
});

document.addEventListener('change',function(e){
  if(e.target && e.target.id== 'select-minute'){
        minute =document.getElementById('select-minute').value;
        alert(minute);
   }
});

function setAlarm(){

  alert(timeDown);
  let timer = setInterval(function(){
      timeDown--;
      document.getElementById('show-timeDown').innerHTML=timeDown + ' :second(s) left'
      if(timeDown<=0){
        alert('alarmed');
        clearInterval(timer);
        document.getElementById('show-timeDown').innerHTML='Alarmed!!!';
      }
    },500);
    
}

