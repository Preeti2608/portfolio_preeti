/* =========================================================
   CERTIFICATE CARD — shared renderer
   Used by BOTH:
     - main.js            (Home page  -> #certGrid, featured only)
     - certificates-page.js (Vault page -> #allCertificates, all certs)

   This is the ONLY place a certificate card's markup is built, so the
   home page and the certificates page can never drift out of sync.
   ========================================================= */

/**
 * Build a single certificate card (glass-card) as a clickable link
 * that opens the certificate's PDF in a new tab.
 * @param {{code:string, org:string, label:string, pdf:string}} cert
 * @param {number} idx - used only to stagger the existing reveal-delay classes
 */
export function createCertCard(cert, idx){
  const card = document.createElement('a');
  card.href = cert.pdf;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.className = 'glass-card cert-card reveal reveal-delay-' + ((idx % 4) + 1);
  card.innerHTML = `
    <div class="cert-badge">${cert.code}</div>
    <h4>${cert.org}</h4>
    <p>${cert.label}</p>
    <span class="cert-view">View Certificate →</span>
  `;
  return card;
}

/**
 * Build the "More Certificates" card that links to certificates.html.
 * Same size/glass-effect/hover/badge/typography as a normal cert card.
 * @param {number} idx - for reveal-delay staggering
 * @param {number} totalCount - total certificates in the vault
 */
export function createMoreCertCard(idx, totalCount){
  const card = document.createElement('a');
  card.href = 'certificates.html';
  card.className = 'glass-card cert-card more-cert-card reveal reveal-delay-' + ((idx % 4) + 1);
  card.innerHTML = `
    <div class="cert-badge">📂</div>
    <h4>More Certificates</h4>
    <p>${totalCount} Credentials</p>
    <span class="cert-view">Explore →</span>
  `;
  return card;
}

/**
 * Render a list of certificates into the given grid element.
 * @param {string} gridId - id of the container element
 * @param {Array} certs - certificates to render
 */
export function renderCertGrid(gridId, certs){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  certs.forEach((cert, idx) => grid.appendChild(createCertCard(cert, idx)));
}
