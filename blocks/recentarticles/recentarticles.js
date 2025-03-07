
export default async function decorate() {
  const response = await fetch('http://localhost:3000/query-index.json?limit=4');
  const data = await response.json();
 
  const recent_article_wrapper=document.querySelector('.recentarticles')

  for(var e of data.data)
    {
     console.log(e)
      var img,desc;
      const a=document.createElement('a');
      a.href=e.path;
    const article1=document.createElement('div');
    img=document.createElement('img');
    img.setAttribute('src',e.image);
    desc=document.createElement('p');
    desc.textContent=e.description;
    article1.append(img)
    const h4=document.createElement('h4');
    h4.textContent=e.title;
    article1.append(h4);
    article1.append(desc);
    a.append(article1);
    recent_article_wrapper.append(a);
    }

const button=document.createElement('button');
button.innerHTML="<a href='http://localhost:3000/magazine'>All Articles</a>";

const recent_article_wrapper1=document.querySelector('.recentarticles-wrapper')
recent_article_wrapper1.append(button);
const h3=document.createElement('h3');
h3.textContent="Recent Articles";
recent_article_wrapper1.prepend(h3);
document.querySelector('.recentarticles-wrapper').append(document.createElement('hr'));
const p=document.getElementsByClassName('recentarticles')[0].getElementsByTagName('p');
console.log(p);
for(var e of p){
  
if(e.innerHTML.length>30)
e.innerText=e.innerText.substring(0,28)+'...';
}
}
