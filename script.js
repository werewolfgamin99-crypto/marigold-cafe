document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('formStatus');
  const name = document.getElementById('name').value.trim();

  // NOTE: this demo just confirms the message locally.
  // To actually receive messages, connect this form to a service
  // like Formspree, Netlify Forms, or your own email backend.
  status.textContent = `Thanks${name ? ', ' + name : ''} — we'll get back to you soon.`;

  this.reset();
});
