window.createContactSection = function createContactSection() {
  return `
    <section class="section" id="contact">
      <div class="section-header">
        <p class="section-label">Contact</p>
        <h2 class="section-title">Let's connect</h2>
        <p class="section-copy">
          Want to talk cloud, labs, projects, or early DevOps roles? Send a message and I will
          keep building from there.
        </p>
      </div>
      <form class="contact-form" id="contact-form" novalidate>
        <div class="form-row">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required />
          <p class="error-message" id="name-error" aria-live="polite"></p>
        </div>
        <div class="form-row">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required />
          <p class="error-message" id="email-error" aria-live="polite"></p>
        </div>
        <div class="form-row">
          <label for="message">Message</label>
          <textarea id="message" name="message" required minlength="10"></textarea>
          <p class="error-message" id="message-error" aria-live="polite"></p>
        </div>
        <button class="button" type="submit">Send Message</button>
        <p class="form-note" id="form-status" role="status" aria-live="polite">
          This form is frontend-only for now and ready for a future backend or serverless function.
        </p>
      </form>
    </section>
  `;
};

window.setupContactForm = function setupContactForm() {
  const form = document.getElementById('contact-form');

  if (!form) {
    return;
  }

  const fields = {
    name: form.elements.name,
    email: form.elements.email,
    message: form.elements.message,
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const errors = validateContactForm(fields);

    Object.entries(errors).forEach(([field, message]) => {
      const errorNode = document.getElementById(`${field}-error`);
      fields[field].setAttribute('aria-invalid', message ? 'true' : 'false');
      errorNode.textContent = message;
    });

    const status = document.getElementById('form-status');
    const hasErrors = Object.values(errors).some(Boolean);

    status.textContent = hasErrors
      ? 'Please fix the highlighted fields and try again.'
      : 'Looks good. Backend delivery can be connected later.';
  });
};

function validateContactForm(fields) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return {
    name: fields.name.value.trim() ? '' : 'Please enter your name.',
    email: emailPattern.test(fields.email.value.trim()) ? '' : 'Please enter a valid email address.',
    message: fields.message.value.trim().length >= 10 ? '' : 'Please write at least 10 characters.',
  };
}
