document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  const count = document.querySelector('#bag-count');
  const toast = document.querySelector('#toast');
  let items = 0;
  document.querySelectorAll('.quick-add').forEach(button => button.addEventListener('click', () => {
    items += 1; count.textContent = items;
    toast.textContent = `${button.dataset.product} added to your bag.`;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2600);
  }));
  document.querySelector('#newsletter-form').addEventListener('submit', event => {
    event.preventDefault();
    const message = document.querySelector('#form-message');
    message.textContent = 'You’re on the list. Welcome to NOW.';
    event.currentTarget.reset();
  });
  document.querySelector('#search-button').addEventListener('click', () => {
    toast.textContent = 'Search is coming soon.'; toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2200);
  });
});
