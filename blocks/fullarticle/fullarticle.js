
export default async function decorate() {
    const container =document.querySelector('.fullarticle-wrapper');
    const div =document.createElement('div');
    div.innerHTML="<div> magazine </div><div class='triangle-right'></div><div>arctic surfing</div>";
div.classList.add("breadcrumbs");
container.prepend(div);
const container2 =document.querySelector('.fullarticle-container');

const share_news_div=document.createElement('div');
share_news_div.classList.add('shareNews');
const p=document.createElement('p');
p.innerHTML="<strong>SHARE THIS STORY</strong>";
p.classList.add('news_head');
share_news_div.append(p);
const child_div1=document.createElement('div');
share_news_div.append(child_div1);
child_div1.innerHTML="<h1>Western australia</h1><p>Thursday, 30 june</p>"
const child_div2=document.createElement('div');
share_news_div.append(child_div2);
child_div2.innerHTML="<h1>Eastern australia</h1><p>Thursday, 30 june</p>"
const child_div3=document.createElement('div');
share_news_div.append(child_div3);
child_div3.innerHTML="<h1>Western australia</h1><p>Thursday, 30 june</p>"
const child_div4=document.createElement('div');
share_news_div.append(child_div4);
child_div4.innerHTML="<h1>Western australia</h1><p>Thursday, 30 june</p>"
container2.append(share_news_div);

}