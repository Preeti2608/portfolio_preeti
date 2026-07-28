/* =========================================================
   CERTIFICATES VAULT PAGE (certificates.html)
   Renders ALL certificates using the exact same card component
   and shared systems (background, navbar, reveal, spotlight)
   as the home page — nothing here is a separate implementation.
   ========================================================= */
import { certificationsData } from './data/certifications.js';
import { renderCertGrid } from './cert-card.js';

import { initBackground } from './background.js';
import { initNavbar } from './navbar.js';
import { initScrollReveal, initCardSpotlight } from './animations.js';

function init(){
  initBackground();

  // Every certificate, driven entirely by certificationsData —
  // adding a new object to that array is the only thing ever needed.
  renderCertGrid('allCertificates', certificationsData);

  initNavbar();
  initScrollReveal();
  initCardSpotlight();
}

init();
