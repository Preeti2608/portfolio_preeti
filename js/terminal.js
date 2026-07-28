/* ================= TERMINAL TYPE-IN ================= */
export function initTerminal(){
  const body = document.getElementById('terminalBody');
  const script = [
    { type:'cmd', text:'whoami' },
    { type:'out', text:'Preeti Mittal — Software Engineering Student (B.Tech, 3rd Year)' },
    { type:'cmd', text:'cat core_focus.txt' },
    { type:'out', text:'Backend Development · Artificial Intelligence · DevOps · Cloud Computing' },
    { type:'cmd', text:'status --check' },
    { type:'out', text:'Problem Solver ......... <span class="accent">ACTIVE</span>' },
    { type:'out', text:'Continuous Learner ..... <span class="accent">ACTIVE</span>' },
    { type:'cmd', text:'echo $OPEN_TO' },
    { type:'out', text:'Internships · AI/ML Projects · Open Source · Hackathons' },
  ];
  let started = false;
  function typeAll(){
    if(started) return;
    started = true;
    let i = 0;
    function next(){
      if(i >= script.length) return;
      const line = document.createElement('div');
      line.className = 'term-line';
      if(script[i].type === 'cmd'){
        line.innerHTML = '<span class="prompt">preeti@systems:~$</span> ' + script[i].text;
      } else {
        line.innerHTML = '<span class="out">' + script[i].text + '</span>';
      }
      body.appendChild(line);
      requestAnimationFrame(()=> line.classList.add('show'));
      i++;
      setTimeout(next, script[i-1].type==='cmd' ? 420 : 320);
    }
    next();
  }
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ typeAll(); obs.disconnect(); } });
  }, { threshold:0.3 });
  obs.observe(document.getElementById('about'));
}
