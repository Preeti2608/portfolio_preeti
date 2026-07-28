/* ================= MOBILE NAV ================= */
export function initNavbar(){
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  function setOpen(open){
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.textContent = open ? '✕' : '☰';
  }

  toggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    setOpen(!links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> setOpen(false));
  });

  document.addEventListener('click', (e)=>{
    if(links.classList.contains('open') && !links.contains(e.target) && e.target !== toggle){
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') setOpen(false);
  });

  let resizeTimer;
  window.addEventListener('resize', ()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
      if(window.innerWidth > 860) setOpen(false);
    }, 120);
  });
}
