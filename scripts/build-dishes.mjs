import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const lines = readFileSync(resolve(root, 'dish_map.txt'), 'utf8').split(/\r?\n/);

const normalizeName = raw => raw
  .replace(/\bConsome\b/gi, 'Consommé')
  .replace(/\bcalpachio\b/gi, 'carpaccio')
  .replace(/\bcanappe\b/gi, 'canapé')
  .replace(/\bhollandais\b/gi, 'hollandaise')
  .replace(/\bGaspacho\b/gi, 'Gazpacho')
  .replace(/\bFoigres\b/gi, 'Foie gras')
  .replace(/\brissoto\b/gi, 'risotto')
  .replace(/\bTempei\b/gi, 'Tempeh')
  .replace(/\bmeat ball\b/gi, 'meatball')
  .replace(/\bveggies\b/gi, 'vegetables')
  .replace(/\s+/g, ' ')
  .trim();

const slug = value => value
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const categoryFor = name => {
  const lower = name.toLowerCase();
  if (/(soup|bisque|gazpacho)/.test(lower)) return 'soup';
  if (/(choux pastry)/.test(lower)) return 'dessert';
  if (/(canapé|carpaccio|oyster|salad|scallop|savory puff|foie gras)/.test(lower)) return 'starter';
  return 'main';
};

const dishes = [];
const usedIds = new Set();

for (const line of lines) {
  const match = line.match(/(IMG_\d+_\d+\.jpg)\s*(.*)$/);
  if (!match || !match[2].trim()) continue;
  const image = match[1];
  const name = normalizeName(match[2]);
  let id = slug(name);
  if (usedIds.has(id)) id = `${id}-${image.match(/\d+/)?.[0] ?? dishes.length + 1}`;
  usedIds.add(id);
  dishes.push({
    id,
    name,
    image,
    alt: `A plated serving of ${name}`,
    category: categoryFor(name),
    description: `${name}, made in Tomoko's kitchen.`
  });
}

writeFileSync(resolve(root, 'data/dishes.json'), `${JSON.stringify(dishes, null, 2)}\n`);
console.log(`Published ${dishes.length} named dishes; unnamed files were excluded.`);
