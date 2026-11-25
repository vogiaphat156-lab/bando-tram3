const masonry=document.getElementById('masonry');
const filters=document.querySelectorAll('.filter');
let artworks=[];let activeFilter='all';

async function loadArtworks(){
  try{const response=await fetch('images.json',{cache:'no-store'});if(!response.ok)throw new Error('Không thể tải danh sách ảnh');artworks=await response.json();render()}
  catch(error){masonry.innerHTML='<p>'+error.message+'</p>'}
}

function render(){
  const shown=activeFilter==='all'?artworks:artworks.filter(item=>item.group===activeFilter);
  masonry.innerHTML='';
  shown.forEach((item,index)=>{
    const card=document.createElement('article');card.className='art-card';card.dataset.index=artworks.indexOf(item);
    card.innerHTML=`<img loading="lazy" decoding="async" src="${item.src}" alt="${item.title}" width="800" height="${item.ratio==='tall'?1100: item.ratio==='wide'?600:850}"><div class="caption"><h3>${item.title}</h3><p>${item.caption||item.group}</p></div>`;
    card.addEventListener('click',()=>openLightbox(item));masonry.appendChild(card);
  });observeCards();
}

function observeCards(){
  const cards=[...document.querySelectorAll('.art-card')];
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){const card=entry.target;const visibleIndex=cards.indexOf(card);card.style.transitionDelay=Math.min(visibleIndex%4,3)*90+'ms';card.classList.add('visible');observer.unobserve(card)}})
  },{rootMargin:'0px 0px 140px 0px',threshold:.08});
  cards.forEach(card=>observer.observe(card));
}

filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');activeFilter=button.dataset.filter;render();document.getElementById('gallery').scrollIntoView({behavior:'smooth',block:'start'})}));

const lightbox=document.getElementById('lightbox');
function openLightbox(item){document.getElementById('lightbox-image').src=item.src;document.getElementById('lightbox-image').alt=item.title;document.getElementById('lightbox-title').textContent=item.title;document.getElementById('lightbox-description').textContent=item.description||item.caption||'';lightbox.hidden=false;document.body.style.overflow='hidden'}
function closeLightbox(){lightbox.hidden=true;document.body.style.overflow=''}
document.querySelector('.close').addEventListener('click',closeLightbox);lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox()});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeLightbox()});
loadArtworks();
