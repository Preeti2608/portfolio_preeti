/* ================= BOOT SEQUENCE ================= */
export function initBoot(){
  const lines = [
    { t: 'initializing preeti.systems v2.6 ...', cls:'dim' },
    { t: 'loading modules: backend / ai-core / devops', cls:'dim' },
    { t: '[OK] neural network renderer', cls:'ok' },
    { t: '[OK] fastapi microservice bridge', cls:'ok' },
    { t: '[OK] vector memory index', cls:'ok' },
    { t: 'authenticating operator: Preeti Mittal', cls:'dim' },
    { t: 'ACCESS GRANTED — welcome.', cls:'ok' },
  ];
  const container = document.getElementById('boot-lines');
  const bar = document.getElementById('boot-bar');
  let i = 0;
  function renderLine(){
    if(i >= lines.length){
      setTimeout(()=>{
        document.getElementById('boot-screen').classList.add('hidden');
        document.body.classList.remove('boot-lock');
      }, 550);
      return;
    }
    const el = document.createElement('div');
    el.className = 'boot-line';
    el.innerHTML = (lines[i].cls==='ok' ? '<span class="ok">✓</span> ' : '') + '<span class="'+lines[i].cls+'">'+lines[i].t+'</span>';
    if(i === lines.length-1){ el.innerHTML += '<span class="boot-cursor"></span>'; }
    container.appendChild(el);
    requestAnimationFrame(()=> el.classList.add('show'));
    bar.style.width = Math.round(((i+1)/lines.length)*100) + '%';
    i++;
    setTimeout(renderLine, 260);
  }
  renderLine();
  // safety: never lock scroll forever
  setTimeout(()=>{ document.getElementById('boot-screen').classList.add('hidden'); document.body.classList.remove('boot-lock'); }, 4500);
}
