document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  function current() {
    return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ditech-theme', theme);
    } catch (e) {}
    btn.setAttribute('aria-label', theme === 'light' ? 'Անցնել մուգ թեմայի' : 'Անցնել բաց թեմայի');
    btn.setAttribute('title', theme === 'light' ? 'Մուգ թեմա' : 'Բաց թեմա');
  }

  apply(current());
  btn.addEventListener('click', function () {
    apply(current() === 'light' ? 'dark' : 'light');
  });
});
