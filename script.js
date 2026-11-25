const masonry=document.getElementById('masonry');
const filters=[...document.querySelectorAll('.filter')];
const countLabel=document.getElementById('gallery-count');
const lightbox=document.getElementById('lightbox');
let artworks=[];
let activeFilter='all';
let lastFocusedElement=null;

// URLs remain relative to the deployed site root, including /bando-tram3/ on GitHub Pages.
function assetUrl(path){return new URL(path,document.baseURI).href}

async function loadArtworks(){
  try{
    const response=await fetch(assetUrl('images.json'),{cache:'no-cache'});
    if(!response.ok)throw new Error(`Danh sách ảnh không tải được (HTTP ${response.status}).`);
    const data=await response.json();
    if(!Array.isArray(data))throw new Error('images.json cần chứa một danh sách tác phẩm.');
    artworks=data.filter(item=>item&&item.src&&item.title);
    renderGallery();
  }catch(error){
    masonry.innerHTML='';
    const message=document.createElement('p');message.className='notice';message.textContent=`Không thể hiển thị bộ sưu tập. ${error.message}`;masonry.append(message);
    countLabel.textContent='';
  }finally{masonry.setAttribute('aria-busy','false')}
}

function renderGallery(){
  const shown=activeFilter==='all'?artworks:artworks.filter(item=>item.group===activeFilter);
  masonry.replaceChildren();
  shown.forEach((item,index)=>{
    const card=document.createElement('button');card.type='button';card.className='art-card';card.setAttribute('aria-label',`Xem tác phẩm: ${item.title}`);
    const image=document.createElement('img');image.className='art-image';image.src=assetUrl(item.src);image.alt=item.alt||item.title;image.loading='lazy';image.decoding='async';image.width=800;
    if(item.ratio==='tall')image.height=1100;else if(item.ratio==='wide')image.height=600;else image.height=850;
    const copy=document.createElement('span');copy.className='card-copy';
    const group=document.createElement('span');group.className='card-meta';group.textContent=item.group||'Tác phẩm từ gạo';
    const title=document.createElement('span');title.className='card-title';title.textContent=item.title;
    const caption=document.createElement('span');caption.className='card-caption';caption.textContent=item.caption||'';
    copy.append(group,title);if(item.caption)copy.append(caption);card.append(image,copy);card.addEventListener('click',()=>openLightbox(item,card));masonry.append(card);
    card.style.setProperty('--reveal-delay',`${(index%3)*70}ms`);
  });
  countLabel.textContent=`${shown.length} ${shown.length===1?'tác phẩm':'tác phẩm'}`;
  revealCards();
}

function revealCards(){
  const cards=document.querySelectorAll('.art-card');
  if(!('IntersectionObserver'in window)){cards.forEach(card=>card.classList.add('is-visible'));return}
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})
  },{root:null,rootMargin:'0px 0px 100px 0px',threshold:.04});
  cards.forEach(card=>observer.observe(card));
}

filters.forEach(button=>button.addEventListener('click',()=>{
  activeFilter=button.dataset.filter;
  filters.forEach(filter=>{const selected=filter===button;filter.classList.toggle('is-active',selected);filter.setAttribute('aria-pressed',String(selected))});
  renderGallery();
}));

function openLightbox(item,trigger){
  lastFocusedElement=trigger;
  const image=document.getElementById('lightbox-image');image.src=assetUrl(item.src);image.alt=item.alt||item.title;
  document.getElementById('lightbox-title').textContent=item.title;
  document.getElementById('lightbox-description').textContent=item.description||item.caption||'';
  document.getElementById('lightbox-group').textContent=item.group||'Tác phẩm từ gạo';
  lightbox.hidden=false;document.body.style.overflow='hidden';lightbox.querySelector('.lightbox-close').focus();
}
function closeLightbox(){if(lightbox.hidden)return;lightbox.hidden=true;document.body.style.overflow='';if(lastFocusedElement)lastFocusedElement.focus()}
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeLightbox()});
loadArtworks();
