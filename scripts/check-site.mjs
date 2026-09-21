import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const htmlFiles = ['index.html', 'pages/about/index.html', 'pages/cooking/index.html', 'pages/games/index.html', 'pages/games/memory/index.html'];
const errors = [];

const localTarget = (reference, baseDirectory) => {
  const clean = reference.split('#')[0].split('?')[0];
  if (!clean || /^(https?:|mailto:|tel:|data:)/.test(clean)) return null;
  let target = clean.startsWith('/') ? join(root, clean) : resolve(baseDirectory, clean);
  if (clean.endsWith('/')) target = join(target, 'index.html');
  return target;
};

for (const file of htmlFiles) {
  const fullPath = join(root, file);
  if (!existsSync(fullPath)) { errors.push(`${file}: page is missing`); continue; }
  const html = readFileSync(fullPath, 'utf8');
  const baseHref = html.match(/<base href="([^"]+)">/)?.[1];
  const baseDirectory = baseHref ? resolve(dirname(fullPath), baseHref) : dirname(fullPath);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${file}: missing title`);
  if (!/<meta name="description" content="[^"]+">/.test(html)) errors.push(`${file}: missing meta description`);
  if (!/<link rel="canonical" href="[^"]+">/.test(html)) errors.push(`${file}: missing canonical URL`);
  const htmlWithoutBase = html.replace(/<base\s+href="[^"]+">/, '');
  for (const match of htmlWithoutBase.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = localTarget(match[1], baseDirectory);
    if (target && !existsSync(target)) errors.push(`${file}: missing local reference ${match[1]}`);
  }
}

try {
  const dishes = JSON.parse(readFileSync(join(root, 'data/dishes.json'), 'utf8'));
  const ids = new Set();
  dishes.forEach((dish, index) => {
    const label = `data/dishes.json item ${index + 1}`;
    for (const field of ['id', 'name', 'image', 'alt', 'category', 'description']) {
      if (typeof dish[field] !== 'string' || !dish[field].trim()) errors.push(`${label}: missing ${field}`);
    }
    if (ids.has(dish.id)) errors.push(`${label}: duplicate id ${dish.id}`);
    ids.add(dish.id);
    if (dish.image && !existsSync(join(root, 'pages/cooking/figures/thumbs', dish.image))) errors.push(`${label}: missing thumbnail ${dish.image}`);
    if (dish.image && !existsSync(join(root, 'pages/cooking/figures/gallery', dish.image))) errors.push(`${label}: missing full image ${dish.image}`);
  });
} catch (error) { errors.push(`data/dishes.json: ${error.message}`); }

if (errors.length) {
  console.error(`Site validation failed with ${errors.length} error(s):\n- ${errors.join('\n- ')}`);
  process.exitCode = 1;
} else {
  console.log(`Site validation passed for ${htmlFiles.length} pages and dish data.`);
}
