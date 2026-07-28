import { skillsData } from './data/skills.js';
import { projectsData } from './data/projects.js';
import { aiData } from './data/ai.js';
import { timelineData } from './data/timeline.js';
import { certificationsData } from './data/certifications.js';
import { renderCertGrid, createMoreCertCard } from './cert-card.js';

import { initBoot } from './boot.js';
import { initBackground } from './background.js';
import { initNavbar } from './navbar.js';
import { initTerminal } from './terminal.js';
import { initRoleCycler, initScrollReveal, initCardSpotlight, initOrbParallax, initDevopsFlow } from './animations.js';
import { initContact } from './contact.js';

/* ================= SKILLS RENDER ================= */
function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  skillsData.forEach((cat, idx)=>{
    const card = document.createElement('div');
    card.className = 'glass-card skill-card reveal reveal-delay-'+((idx%4)+1);
    card.innerHTML = `
      <div class="sk-head">
        <div class="sk-icon">${cat.icon}</div>
        <h4>${cat.name}</h4>
      </div>
      <div class="skill-tags">${cat.items.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
    `;
    grid.appendChild(card);
  });
}

/* ================= PROJECTS RENDER ================= */
function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  projectsData.forEach((p, idx)=>{
    const card = document.createElement('div');
    card.className = 'glass-card project-card reveal reveal-delay-'+((idx%2)+1);
    card.innerHTML = `
      <div class="project-visual">
        <div class="pv-grid"></div>
        <div class="pv-glow" style="background:${p.glow}; top:-60px; left:${idx%2===0?'-40px':'auto'}; right:${idx%2===1?'-40px':'auto'};"></div>
        <span class="pv-tag">${p.tag}</span>
      </div>
      <div class="project-body">
        <span class="p-eyebrow">${p.sub}</span>
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="project-tech">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
        <ul class="project-features">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
        <div class="project-actions">
          ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">GitHub ↗</a>` : `<span class="disabled">Repo — Coming Soon</span>`}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live Demo ↗</a>` : `<span class="disabled">Demo — Coming Soon</span>`}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ================= AI EXPERTISE RENDER ================= */
function renderAi(){
  const grid = document.getElementById('aiGrid');
  aiData.forEach((it, idx)=>{
    const card = document.createElement('div');
    card.className = 'glass-card ai-card reveal reveal-delay-'+((idx%4)+1);
    card.innerHTML = `
      <div class="ai-bar"></div>
      <span class="ai-num">0${idx+1}</span>
      <h4>${it.name}</h4>
      <p>${it.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ================= TIMELINE RENDER ================= */
function renderTimeline(){
  const tl = document.getElementById('timeline');
  timelineData.forEach(it=>{
    const el = document.createElement('div');
    el.className = 'tl-item' + (it.current ? ' current' : '');
    el.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-period mono">${it.period}</div>
      <h4>${it.title}</h4>
      <p>${it.desc}</p>
    `;
    tl.appendChild(el);
  });
}

/* ================= CERTIFICATIONS RENDER ================= */
function renderCertifications(){
  const featured = certificationsData.filter(c => c.featured);

  // Reuse the exact same card renderer as certificates.html
  renderCertGrid('certGrid', featured);

  // One extra card below the featured ones, linking to the full vault
  const grid = document.getElementById('certGrid');
  grid.appendChild(createMoreCertCard(featured.length, certificationsData.length));
}

/* ================= INIT ================= */
function init(){
  // boot + background start immediately, same as the original inline scripts
  initBoot();
  initBackground();

  // populate data-driven sections
  renderSkills();
  renderProjects();
  renderAi();
  renderTimeline();
  renderCertifications();

  // feature modules
  initNavbar();
  initTerminal();
  initRoleCycler();
  initDevopsFlow();
  initContact();

  // scroll reveal + spotlight + parallax must run after all cards exist
  initScrollReveal();
  initCardSpotlight();
  initOrbParallax();
}

init();
