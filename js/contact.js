/* ================= CONTACT FORM ================= */
export function initContact(){
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value, email = form.email.value, message = form.message.value;
    const subject = encodeURIComponent('Portfolio Inquiry from ' + name);
    const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
    window.location.href = `mailto:preeti.mittal2608@gmail.com?subject=${subject}&body=${body}`;
  });
}
