/* ================= ROLE CYCLER ================= */
export function initRoleCycler(){
  const roles = [
  'Software Engineering Student',
  'Backend Enthusiast',
  'AI Enthusiast',
  'DevOps Learner'
];
  const el = document.getElementById('roleCycle');
  let idx = 0;
  setInterval(()=>{
    idx = (idx+1) % roles.length;
    el.style.opacity = 0;
    setTimeout(()=>{ el.textContent = roles[idx]; el.style.opacity = 1; }, 260);
  }, 2600);
  el.style.transition = 'opacity 0.26s ease';
}

/* ================= SCROLL REVEAL ================= */
export function initScrollReveal(){
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
  }, { threshold:0.12 });
  els.forEach(el=> obs.observe(el));

  // Re-observe dynamically injected cards after initial render
  setTimeout(()=>{
    document.querySelectorAll('.reveal:not(.in)').forEach(el=> obs.observe(el));
  }, 50);
}

/* ================= CARD SPOTLIGHT (mouse tracking) ================= */
export function initCardSpotlight(){
  document.addEventListener('mousemove', (e)=>{
    document.querySelectorAll('.glass-card').forEach(card=>{
      const r = card.getBoundingClientRect();
      if(e.clientX > r.left-60 && e.clientX < r.right+60 && e.clientY > r.top-60 && e.clientY < r.bottom+60){
        card.style.setProperty('--mx', (e.clientX-r.left)+'px');
        card.style.setProperty('--my', (e.clientY-r.top)+'px');
      }
    });
  }, { passive:true });
}

/* ================= ORB PARALLAX ================= */
export function initOrbParallax(){
  const orb = document.getElementById('orbWrap');
  window.addEventListener('mousemove', (e)=>{
    const x = (e.clientX / window.innerWidth - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    orb.style.transform = `translate(${x}px, ${y}px)`;
    orb.style.transition = 'transform 0.4s ease-out';
  }, { passive:true });
}

/* ================= DEVOPS FLOW ================= */
export function initDevopsFlow(){
  const nodes = [
    { icon:'🌐', label:'Browser' },
    { icon:'🛡', label:'Nginx' },
    { icon:'📦', label:'Docker' },
    { icon:'⚡', label:'FastAPI' },
    { icon:'🧠', label:'Redis' },
    { icon:'🗄', label:'PostgreSQL' },
    { icon:'☁', label:'Cloud' },
  ];
  const row = document.getElementById('flowRow');
  nodes.forEach((n, idx)=>{
    const node = document.createElement('div');
    node.className = 'flow-node';
    node.id = 'flow-node-'+idx;
    node.innerHTML = `<span class="fn-icon">${n.icon}</span>${n.label}`;
    row.appendChild(node);
    if(idx < nodes.length-1){
      const conn = document.createElement('div');
      conn.className = 'flow-connector';
      conn.innerHTML = '<div class="pulse-dot"></div>';
      conn.id = 'flow-conn-'+idx;
      row.appendChild(conn);
    }
  });

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stackedQuery = window.matchMedia('(max-width:820px)');
  let running = false;
  function cycle(){
    if(reduced || running) return;
    running = true;
    let i = 0;
    function activate(){
      const stacked = stackedQuery.matches;
      document.querySelectorAll('.flow-node').forEach(n=>n.classList.remove('active'));
      document.getElementById('flow-node-'+i).classList.add('active');
      if(i < nodes.length-1){
        const conn = document.getElementById('flow-conn-'+i);
        const dot = conn.querySelector('.pulse-dot');
        dot.style.transition = 'none';
        if(stacked){
          dot.style.left = 'calc(50% - 5px)';
          dot.style.top = '-4px';
        } else {
          dot.style.left = '-4px';
          dot.style.top = '-4px';
        }
        dot.style.opacity = '1';
        requestAnimationFrame(()=>{
          if(stacked){
            dot.style.transition = 'top 0.5s linear';
            dot.style.top = 'calc(100% - 6px)';
          } else {
            dot.style.transition = 'left 0.5s linear';
            dot.style.left = 'calc(100% - 6px)';
          }
        });
      }
      i++;
      if(i < nodes.length){ setTimeout(activate, 560); }
      else { setTimeout(()=>{ document.querySelectorAll('.flow-node').forEach(n=>n.classList.remove('active')); running=false; setTimeout(cycle, 900); }, 560); }
    }
    activate();
  }
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ cycle(); } });
  }, { threshold:0.3 });
  obs.observe(document.getElementById('devops'));
}
