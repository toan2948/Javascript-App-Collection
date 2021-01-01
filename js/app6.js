 /*App6: json*/

 //define an object
 let myInfo ={
    name:'toan',
    gender:'male' ,
    city: 'berlin',
    showname: function(){
        return this.name ;
    }
};
function showInfo(){
    // turn an object to a json
    let j = JSON.stringify(myInfo);
    // turn an json to an object
    let o =JSON.parse(j);
   document.getElementById('jsonInfo').innerText= 'JSON format: ' + j;

}