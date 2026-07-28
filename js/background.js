/* ================= BACKGROUND NEURAL CANVAS ================= */
export function initBackground(){
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let w,h,particles=[];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const COUNT = Math.min(70, Math.floor((window.innerWidth*window.innerHeight)/22000));
  for(let i=0;i<COUNT;i++){
    particles.push({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-0.5)*0.25, vy:(Math.random()-0.5)*0.25,
      r: Math.random()*1.6+0.6
    });
  }

  function step(){
    ctx.clearRect(0,0,w,h);
    for(const p of particles){
      if(!reduced){ p.x += p.vx; p.y += p.vy; }
      if(p.x<0) p.x=w; if(p.x>w) p.x=0;
      if(p.y<0) p.y=h; if(p.y>h) p.y=0;
    }
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i], b=particles[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 130){
          ctx.strokeStyle = 'rgba(108,99,255,'+ (0.12*(1-dist/130)) +')';
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    for(const p of particles){
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(34,211,238,0.55)';
      ctx.fill();
    }
    if(!reduced) requestAnimationFrame(step);
  }
  step();
}
