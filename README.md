# Tomoko's Playground

A playful personal website with small games, cooking ideas, and an About page. It is built with plain HTML, CSS, and JavaScript and deployed through GitHub Pages.

## Pages

- `/` — home and site hub
- `/pages/games/` — game collection
- `/pages/games/memory/` — Kitchen Pairs memory game
- `/pages/cooking/` — filterable cooking ideas and favorites
- `/pages/about/` — personal introduction

## Preview locally

Run a static server from the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. A server is required because the cooking page loads its dish data with `fetch`.

## Edit cooking ideas

Add or correct dish names in `dish_map.txt`, after the matching JPG filename. Leave the name blank to exclude a photograph from the site. Then rebuild the published data:

```sh
node scripts/build-dishes.mjs
```

The generated records live in `data/dishes.json`. Each record contains:

- a unique `id`
- `name`, `alt`, `category`, and `description` text
- an `image` filename present in both `pages/cooking/figures/gallery/` and `pages/cooking/figures/thumbs/`

The large gallery image is used only in the detail dialog. A corresponding file in `pages/cooking/figures/thumbs/` is used in the browsing grid and memory game.

## Validate

```sh
node scripts/check-site.mjs
```

The check verifies primary pages, local links and assets, required metadata, dish fields, duplicate dish IDs, and both versions of each published image.

## Design and requirements

See [`REFACTOR.md`](REFACTOR.md) for product direction, requirements, accessibility expectations, and the decision log.
