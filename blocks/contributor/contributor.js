export default async function decorate(){
const contrib=document.getElementsByClassName('contributor');
for(var ele of contrib){
const buttons=ele.getElementsByClassName('button');

for(var button of buttons)
    {
        
      console.log(button)
        if(button.innerText=="Facebook")
button.innerHTML="<img class='social-links' src='../../icons/facebook.png'/>";
        else if(button.innerText=="Twitter")
            button.innerHTML="<img class='social-links' src='../../icons/twitter.png'/>";     
        else if(button.innerText=="Instagram")
            button.innerHTML="<img class='social-links' src='../../icons/instagram.png'/>";
    }}
}