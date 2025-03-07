
export default async function decorate() {
    const response = await fetch('http://localhost:3000/query-index.json');
    const data = await response.json();
   
    const recent_article_wrapper=document.querySelector('.allarticles')
  
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
  button.textContent="All Articles";
  const recent_article_wrapper1=document.querySelector('.allarticles-wrapper')
  recent_article_wrapper1.append(button);

  document.querySelector('.allarticles-wrapper').append(document.createElement('hr'));
  const p=document.getElementsByClassName('allarticles')[0].getElementsByTagName('p');
  console.log(p);
  for(var e of p){
    
  if(e.innerHTML.length>30)
  e.innerText=e.innerText.substring(0,28)+'...';
  }
  }
  