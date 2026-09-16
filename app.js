const menuButton=document.querySelector('.menu-button');
const siteNav=document.querySelector('.site-nav');
const menuLabel=menuButton?.querySelector('.sr-only');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));if(menuLabel)menuLabel.textContent=open?'Close menu':'Open menu';siteNav?.classList.toggle('is-open',open)});
siteNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');if(menuLabel)menuLabel.textContent='Open menu';siteNav.classList.remove('is-open')}));

const cards=[...document.querySelectorAll('.package-card')];
const summary=document.querySelector('#package-summary');
const searchForm=document.querySelector('.destination-search');
const searchInput=document.querySelector('#destination-search');
const searchClear=document.querySelector('.search-clear');
const searchEmpty=document.querySelector('#search-empty');
const showAllButton=searchEmpty?.querySelector('.text-button');

function normalize(value){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim().toLowerCase()}
function filterPackages(query=''){
  const term=normalize(query);
  let visible=0;
  cards.forEach(card=>{
    const matches=!term||normalize(card.dataset.search||card.textContent||'').includes(term);
    card.hidden=!matches;
    if(matches)visible+=1;
  });
  if(searchClear)searchClear.hidden=!term;
  if(searchEmpty)searchEmpty.hidden=visible!==0;
  if(summary){
    if(!term)summary.textContent='Six destinations available from Canada.';
    else if(visible===0)summary.textContent=`No destinations match “${query.trim()}”.`;
    else summary.textContent=`${visible} ${visible===1?'destination':'destinations'} matching “${query.trim()}”.`;
  }
}
searchForm?.addEventListener('submit',event=>event.preventDefault());
searchInput?.addEventListener('input',event=>filterPackages(event.currentTarget.value));
searchInput?.addEventListener('keydown',event=>{if(event.key==='Escape'){event.currentTarget.value='';filterPackages();}});
searchClear?.addEventListener('click',()=>{if(searchInput)searchInput.value='';filterPackages();searchInput?.focus()});
showAllButton?.addEventListener('click',()=>{if(searchInput)searchInput.value='';filterPackages();searchInput?.focus()});
