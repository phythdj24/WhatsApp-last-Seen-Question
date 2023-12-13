document.querySelector('#SubmitBtn').addEventListener('click',function (){
   
   const Inputtime = document.querySelector('#inputtime').value;
   console.log("onclick", Inputtime) 

   const lastSeen = getLastSeen(Inputtime);
});

function getLastSeen (lastSeen) {
   console.log(lastSeen)

   
const dateAndTime = lastSeen.split('I');
console.log(dateAndTime);
}
