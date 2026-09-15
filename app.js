const menuButton=document.querySelector('.menu-button');
const siteNav=document.querySelector('.site-nav');
const menuLabel=menuButton?.querySelector('.sr-only');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));if(menuLabel)menuLabel.textContent=open?'Close menu':'Open menu';siteNav?.classList.toggle('is-open',open)});
siteNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menuButton?.setAttribute('aria-expanded','false');if(menuLabel)menuLabel.textContent='Open menu';siteNav.classList.remove('is-open')}));

const tiles=[...document.querySelectorAll('.destination-tile')];
const cards=[...document.querySelectorAll('.package-card')];
const summary=document.querySelector('#package-summary');
const labels={all:'Six destination ideas available. Select a destination above to narrow the list.',mexico:'Showing Mexico vacation ideas.',dominican:'Showing Dominican Republic vacation ideas.',cuba:'Showing Cuba vacation ideas.',jamaica:'Showing Jamaica vacation ideas.',cancun:'Showing Cancún vacation ideas.','punta-cana':'Showing Punta Cana vacation ideas.'};
function filterPackages(destination){
  cards.forEach(card=>{card.hidden=destination!=='all'&&card.dataset.country!==destination});
  tiles.forEach(tile=>{const active=tile.dataset.filter===destination;tile.classList.toggle('is-active',active);tile.setAttribute('aria-pressed',String(active))});
  if(summary)summary.textContent=labels[destination]||labels.all;
  const packages=document.querySelector('#packages');
  packages?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
tiles.forEach(tile=>tile.addEventListener('click',()=>filterPackages(tile.dataset.filter||'all')));
