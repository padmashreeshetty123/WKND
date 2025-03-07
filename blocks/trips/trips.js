
export default async function decorate() {
const p=document.getElementsByClassName('trips')[0].getElementsByTagName('p');
console.log(p);
for(var e of p){
  
e.innerText=e.innerText.substring(0,30)+'...';
}
const button =document.createElement('button');
button.innerHTML="ALL TRIPS";
document.getElementsByClassName('trips-wrapper')[0].append(button);
document.getElementsByClassName('trips-wrapper')[0].append(document.createElement('hr'));
}