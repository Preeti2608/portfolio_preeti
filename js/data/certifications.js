/*
 * Single source of truth for the Certificates Vault.
 *
 * Schema for every entry:
 *   {
 *     code:     string,   // short badge text, e.g. 'IBM'
 *     org:      string,   // organization name shown as the card title
 *     label:    string,   // certificate description
 *     pdf:      string,   // path to the certificate PDF
 *     featured: boolean   // true  -> also shows on the Home page (max 4 recommended)
 *                          // false -> only shows on certificates.html
 *   }
 *
 * To add a new certificate in the future, just push another object here.
 * Nothing else needs to change — certGrid (home) and allCertificates
 * (certificates.html) both render straight from this array.
 */
export const certificationsData = [
  {
    code: 'IBM',
    org: 'IBM',
    label: 'Professional Certification',
    pdf: 'assets/certificates/ibm.pdf',
    featured: true
  },
  {
    code: 'CSCO',
    org: 'Cisco',
    label: 'Networking & Security Training',
    pdf: 'assets/certificates/cisco.pdf',
    featured: true
  },
  {
    code: 'G',
    org: 'Google',
    label: 'Cloud & IT Fundamentals',
    pdf: 'assets/certificates/google.pdf',
    featured: true
  },
  {
    code: 'AND',
    org: 'Anudip',
    label: 'Skill Development Program',
    pdf: 'assets/certificates/anudip.pdf',
    featured: true
  }
];