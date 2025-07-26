document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });

      if (res.ok) {
        form.reset();
        alert('Thanks! We’ll get back to you within 24–48 hours.');
      } else {
        alert('Something went wrong. Please email us directly.');
      }
    } catch (err) {
      alert('Network error. Try again later.');
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });
}
