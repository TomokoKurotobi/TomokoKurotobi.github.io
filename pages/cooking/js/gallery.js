const grid = document.querySelector('[data-dish-grid]');
const filter = document.querySelector('[data-filter]');
const count = document.querySelector('[data-count]');
const empty = document.querySelector('[data-empty]');
const error = document.querySelector('[data-error]');
const dialog = document.querySelector('[data-dialog]');
const storageKey = 'tomoko-playground:favorites:v1';
let dishes = [];
let activeDish = null;
let lastTrigger = null;

const readFavorites = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return new Set(Array.isArray(saved) ? saved.filter(id => typeof id === 'string') : []);
  } catch {
    return new Set();
  }
};
let favorites = readFavorites();

const saveFavorites = () => {
  try { localStorage.setItem(storageKey, JSON.stringify([...favorites])); } catch { /* Browsing can continue without persistence. */ }
};

const visibleDishes = () => {
  const value = filter.value;
  if (value === 'all') return dishes;
  if (value === 'favorite') return dishes.filter(dish => favorites.has(dish.id));
  return dishes.filter(dish => dish.category === value);
};

const favoriteLabel = dish => favorites.has(dish.id) ? `Remove ${dish.name} from favorites` : `Add ${dish.name} to favorites`;

const dishCard = dish => {
  const article = document.createElement('article');
  article.className = 'dish-card';
  article.dataset.id = dish.id;
  article.innerHTML = `
    <button class="dish-card__open" type="button" aria-label="View ${dish.name}">
      <img src="/pages/cooking/figures/thumbs/${dish.image}" alt="${dish.alt}" loading="lazy" width="900" height="700">
      <span class="dish-card__copy"><span class="eyebrow">${dish.category}</span><strong>${dish.name}</strong></span>
    </button>
    <button class="favorite-button favorite-button--card" type="button" aria-label="${favoriteLabel(dish)}" aria-pressed="${favorites.has(dish.id)}"><span aria-hidden="true">${favorites.has(dish.id) ? '♥' : '♡'}</span></button>`;
  article.querySelector('.dish-card__open').addEventListener('click', event => openDialog(dish, event.currentTarget));
  article.querySelector('.favorite-button').addEventListener('click', () => toggleFavorite(dish.id));
  article.querySelector('img').addEventListener('error', event => {
    event.currentTarget.closest('.dish-card').classList.add('dish-card--image-error');
    event.currentTarget.remove();
  }, { once: true });
  return article;
};

const render = () => {
  const visible = visibleDishes();
  grid.replaceChildren(...visible.map(dishCard));
  count.textContent = `${visible.length} ${visible.length === 1 ? 'idea' : 'ideas'}`;
  empty.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
};

const toggleFavorite = id => {
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  saveFavorites();
  render();
  if (activeDish?.id === id) updateDialogFavorite(activeDish);
};

const updateDialogFavorite = dish => {
  const button = dialog.querySelector('[data-dialog-favorite]');
  const selected = favorites.has(dish.id);
  button.setAttribute('aria-pressed', String(selected));
  button.textContent = selected ? '♥ Saved to favorites' : '♡ Save to favorites';
};

function openDialog(dish, trigger) {
  activeDish = dish;
  lastTrigger = trigger;
  const image = dialog.querySelector('[data-dialog-image]');
  image.src = `/pages/cooking/figures/gallery/${dish.image}`;
  image.alt = dish.alt;
  dialog.querySelector('[data-dialog-category]').textContent = dish.category;
  dialog.querySelector('[data-dialog-title]').textContent = dish.name;
  dialog.querySelector('[data-dialog-description]').textContent = dish.description;
  updateDialogFavorite(dish);
  dialog.showModal();
}

const closeDialog = () => dialog.close();
dialog.querySelector('[data-close-dialog]').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener('close', () => { lastTrigger?.focus(); activeDish = null; });
dialog.querySelector('[data-dialog-favorite]').addEventListener('click', () => { if (activeDish) toggleFavorite(activeDish.id); });

filter.addEventListener('change', render);
document.querySelector('[data-clear-filter]').addEventListener('click', () => { filter.value = 'all'; render(); filter.focus(); });
document.querySelector('[data-random]').addEventListener('click', event => {
  const choices = visibleDishes();
  if (choices.length) openDialog(choices[Math.floor(Math.random() * choices.length)], event.currentTarget);
  else empty.querySelector('button').focus();
});

try {
  const response = await fetch('/data/dishes.json');
  if (!response.ok) throw new Error('Dish data request failed');
  const records = await response.json();
  dishes = records.filter(dish => dish.id && dish.name && dish.image && dish.alt && dish.category);
  render();
} catch {
  count.textContent = 'Cooking ideas unavailable';
  error.hidden = false;
}
