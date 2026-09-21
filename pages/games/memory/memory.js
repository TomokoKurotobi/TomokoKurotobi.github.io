const dishes = [
  { id: 'cream-soup', name: 'Cream soup', image: 'IMG_20200109_131729.jpg' },
  { id: 'onion-soup', name: 'Onion soup', image: 'IMG_20200110_130236.jpg' },
  { id: 'steak', name: 'Steak with chimichurri sauce', image: 'IMG_20200114_135029.jpg' },
  { id: 'quiche', name: 'Seafood quiche', image: 'IMG_20200115_123509.jpg' },
  { id: 'consomme', name: 'Consommé soup', image: 'IMG_20200115_123821.jpg' },
  { id: 'lamb', name: 'Grilled lamb chop', image: 'IMG_20200117_133458.jpg' }
];
const board = document.querySelector('[data-memory-grid]');
const movesNode = document.querySelector('[data-moves]');
const pairsNode = document.querySelector('[data-pairs]');
const bestNode = document.querySelector('[data-best]');
const announcer = document.querySelector('[data-announcer]');
const result = document.querySelector('[data-result]');
const storageKey = 'tomoko-playground:kitchen-pairs-best:v1';
const siteUrl = relativePath => new URL(relativePath, document.baseURI).href;
let firstCard = null;
let secondCard = null;
let locked = false;
let moves = 0;
let pairs = 0;

const getBest = () => {
  try {
    const value = Number(localStorage.getItem(storageKey));
    return Number.isInteger(value) && value > 0 ? value : null;
  } catch { return null; }
};

const setBest = value => {
  try { localStorage.setItem(storageKey, String(value)); } catch { /* The game works without persistence. */ }
};

const shuffle = items => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const updateStats = () => {
  movesNode.textContent = moves;
  pairsNode.textContent = pairs;
  bestNode.textContent = getBest() ?? '—';
};

const reveal = button => {
  button.classList.add('is-revealed');
  button.setAttribute('aria-label', `${button.dataset.name}, revealed`);
};

const conceal = button => {
  button.classList.remove('is-revealed');
  button.setAttribute('aria-label', 'Hidden dish card');
};

const finishGame = () => {
  const previousBest = getBest();
  const isBest = previousBest === null || moves < previousBest;
  if (isBest) setBest(moves);
  updateStats();
  result.querySelector('[data-result-copy]').textContent = isBest ? `You finished in ${moves} turns—a new personal best.` : `You finished in ${moves} turns. Your best is ${previousBest}.`;
  result.hidden = false;
  announcer.textContent = `Game complete in ${moves} turns.`;
  result.focus();
};

const selectCard = button => {
  if (locked || button.classList.contains('is-revealed') || button.classList.contains('is-matched')) return;
  reveal(button);
  if (!firstCard) {
    firstCard = button;
    announcer.textContent = `${button.dataset.name} revealed. Choose another card.`;
    return;
  }
  secondCard = button;
  moves += 1;
  updateStats();
  if (firstCard.dataset.dish === secondCard.dataset.dish) {
    firstCard.classList.add('is-matched');
    secondCard.classList.add('is-matched');
    firstCard.disabled = true;
    secondCard.disabled = true;
    pairs += 1;
    pairsNode.textContent = pairs;
    announcer.textContent = `Match found: ${button.dataset.name}. ${pairs} of 6 pairs complete.`;
    firstCard = null;
    secondCard = null;
    if (pairs === dishes.length) finishGame();
    return;
  }
  locked = true;
  announcer.textContent = `${firstCard.dataset.name} and ${secondCard.dataset.name} do not match.`;
  const first = firstCard;
  const second = secondCard;
  window.setTimeout(() => {
    conceal(first); conceal(second);
    firstCard = null; secondCard = null; locked = false;
    announcer.textContent = 'Cards hidden. Choose two more cards.';
  }, 800);
};

const newGame = () => {
  firstCard = null; secondCard = null; locked = false; moves = 0; pairs = 0;
  result.hidden = true;
  const deck = shuffle(dishes.flatMap(dish => [dish, dish]));
  const cards = deck.map((dish, index) => {
    const button = document.createElement('button');
    button.className = 'memory-card';
    button.type = 'button';
    button.dataset.dish = dish.id;
    button.dataset.name = dish.name;
    button.setAttribute('aria-label', 'Hidden dish card');
    button.innerHTML = `<span class="memory-card__back" aria-hidden="true">?</span><span class="memory-card__face" aria-hidden="true"><img src="${siteUrl(`pages/cooking/figures/thumbs/${dish.image}`)}" alt=""><span>${dish.name}</span></span>`;
    button.addEventListener('click', () => selectCard(button));
    button.style.setProperty('--delay', `${index * 25}ms`);
    return button;
  });
  board.replaceChildren(...cards);
  updateStats();
  announcer.textContent = 'New game ready. Twelve cards are hidden.';
  cards[0]?.focus();
};

document.querySelector('[data-new-game]').addEventListener('click', newGame);
document.querySelector('[data-play-again]').addEventListener('click', newGame);
updateStats();
newGame();
