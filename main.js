document.getElementById('year').textContent = new Date().getFullYear();

function selectBuild(name) {
  const input = document.getElementById('q_selected');
  if (input) {
    input.value = name;
    document.querySelector('a[href="#contact"]')?.scrollIntoView({ behavior: "smooth" });
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
}

// Basic client-side validation (extra to HTML5)
document.getElementById('quoteForm')?.addEventListener('submit', (e) => {
  const honeypot = document.getElementById('company');
  if (honeypot && honeypot.value) {
    // bot -> silently succeed without actually sending
    e.preventDefault();
    alert('Thanks! (If you are human and see this, please remove autofill for the hidden "company" field.)');
    return false;
  }
});
