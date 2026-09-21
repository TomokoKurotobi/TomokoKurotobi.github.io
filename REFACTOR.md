# Personal Website Refactoring Plan

| Field | Value |
|---|---|
| Status | Draft for implementation |
| Branch | `codex/playful-site-refactor-plan` |
| Audience | Site owner and future implementers |
| Target | Static GitHub Pages website |
| Last updated | 2026-09-13 |

## 1. Product direction

Refactor the existing resume-oriented portfolio into a playful personal website: a small digital space where Tomoko can publish games, collect cooking ideas, and introduce herself. Professional experience may appear on the About page, but it is no longer the site's organizing purpose.

The intended experience is warm, curious, and handcrafted. It should feel like one coherent place even when each area has its own personality.

### Confirmed requirements

- The website will expand beyond a professional resume.
- The primary areas are Games, Cooking Ideas, and About Me.
- Trip Planner is explicitly excluded from this refactor.
- Existing material should be refactored rather than discarded without review.
- The work must continue to be deployable as a personal website.

### Inferred constraints from the repository

- Hosting is GitHub Pages, so the default solution should work as a static site.
- The existing implementation is HTML, CSS, Bootstrap, and JavaScript with no build step.
- The existing cooking gallery includes 86 local photographs.
- External dependencies currently include Bootstrap, jQuery, Font Awesome, WOW/Animate.css, and Lottie.

### Proposed defaults

- Keep a framework-free static architecture for the first refactor.
- Present the site as **Tomoko's digital playground**. “Workshop,” “studio,” or another theme can replace this label without changing the architecture.
- Use **About** as the navigation label instead of “Author,” because the site is personal rather than primarily editorial.
- Store favorites, preferences, and game scores locally in the browser; do not introduce accounts or a backend in the first release.
- Deliver incrementally, starting with the common design system and home hub.

## 2. Goals and success measures

| ID | Goal | Observable success measure |
|---|---|---|
| G-01 | Make the site feel personal and fun | The home page introduces all four areas with distinctive, interactive entry cards and does not lead with a resume-style skills inventory. |
| G-02 | Create a coherent experience | Home, Games, Cooking, and About use the same navigation, typography, spacing system, focus treatment, and footer. |
| G-03 | Support continued experimentation | A new page or game can be added without copying the full header, palette, and utility logic into an unrelated one-off implementation. |
| G-04 | Improve constrained-screen usability | All primary tasks work at 320 CSS pixels wide without horizontal page scrolling. |
| G-05 | Improve speed | The initial page does not eagerly download full-resolution assets belonging to sections or gallery items the visitor has not opened. |
| G-06 | Make interactions inclusive | Navigation, cards, dialogs, games, and filters are operable using a keyboard and expose meaningful accessible names. |

## 3. Scope

### First release

- Shared site shell and visual system
- New home page acting as a hub
- Dedicated About page based on the existing biography
- Cooking Ideas page refactored from the existing cooking gallery
- Games landing page and one complete small game
- Local browser persistence where it adds value
- Responsive, accessibility, metadata, and performance cleanup

### Deferred possibilities

- User accounts or synchronization between devices
- A server-side database or CMS
- Comments, public profiles, or multiplayer games
- Live booking, purchasing, or route-provider integrations
- Native mobile applications
- Migrating to React, Vue, or another framework without demonstrated need

## 4. Information architecture

```text
Home
├── Games
│   ├── Game collection
│   └── First game
├── Cooking
│   ├── Idea generator
│   └── Dish gallery/details
└── About
    ├── Personal introduction
    ├── Interests and current curiosities
    └── Optional professional background/contact
```

Every primary page must provide a direct route back to Home and visible routes to the other primary areas. URLs should remain directory-based so they work on GitHub Pages, for example `/pages/games/`, `/pages/cooking/`, and `/pages/about/`.

## 5. Experience principles

1. **Play before credentials.** Lead with things visitors can explore and do.
2. **Reveal detail progressively.** Use short summaries first; avoid walls of text and long modal-only descriptions.
3. **Delight without obstruction.** Motion and surprises must not delay navigation or obscure content.
4. **One house, different rooms.** Each area may have an accent color or motif but must retain shared interaction rules.
5. **Useful without an account.** Core features work anonymously and explain when data stays only on the device.
6. **Graceful failure.** A missing image or stored record must not make the whole page unusable.

## 6. Functional requirements

### 6.1 Shared shell and home

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| SHELL-01 | Must | Provide one consistent global header and footer across all primary pages. | Each page exposes Home, Games, Cooking, and About; the current area is programmatically identifiable. |
| SHELL-02 | Must | Support keyboard and touch navigation. | Every navigation action works with keyboard alone and interactive targets have a minimum 44 by 44 CSS pixel hit area where practical. |
| SHELL-03 | Must | Provide a responsive mobile navigation pattern. | At 320 CSS pixels wide, the menu opens, closes, traps no focus, and does not create horizontal page scrolling. |
| HOME-01 | Must | Replace the resume-first home layout with a three-area launchpad. | Games, Cooking, and About are visible without traversing a skills section. |
| HOME-02 | Must | Retain Tomoko's identity and the existing illustrated character as a visual anchor. | The home page names Tomoko and uses an optimized form of the current hero art or an owner-approved replacement. |
| HOME-03 | Should | Show recent or featured content. | The page can display at least one featured game or dish using the same underlying content data as its destination page. |
| HOME-04 | Could | Add a small nonessential surprise. | A seasonal detail, changing greeting, or similar effect can be disabled by reduced-motion preferences and never blocks a primary action. |

### 6.2 Games

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| GAME-01 | Must | Provide a games collection page with one complete game in the first release. | A visitor can read instructions, start, play, finish, view the result, and restart the game. |
| GAME-02 | Must | Make the first game usable without a mouse. | All gameplay actions and restart controls work using the keyboard, with visible focus. |
| GAME-03 | Must | Define explicit idle, active, paused/backgrounded where relevant, completed, and error states. | The UI never leaves the visitor without a clear next action after completion or recoverable failure. |
| GAME-04 | Should | Persist personal best or recent result locally. | Reloading on the same browser restores valid saved progress/result; malformed stored data is ignored safely. |
| GAME-05 | Should | Avoid time-based disadvantage from reduced motion or background tabs. | Reduced-motion mode remains fully playable; timers, if used, handle page visibility changes predictably. |

The proposed first game is a memory-matching game using a curated subset of cooking imagery. It reuses existing assets, fits the personal theme, and is straightforward to validate. This remains a proposed default, not a confirmed choice.

### 6.3 Cooking Ideas

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| COOK-01 | Must | Turn the existing image wall into browsable dish ideas. | Each published item has a dish name, meaningful image alternative, image path, and at least one category or tag. |
| COOK-02 | Must | Allow filtering by available metadata. | Visitors can apply and clear filters, see the result count, and receive a useful no-results state. |
| COOK-03 | Must | Provide a random “choose for me” idea. | Activating it selects one item from the current eligible set and exposes its details without relying on animation alone. |
| COOK-04 | Must | Load images progressively. | Initial rendering does not wait for all gallery images; off-screen full-size images are lazy-loaded or requested only when needed. |
| COOK-05 | Must | Isolate missing assets. | One missing or malformed dish record does not prevent valid dishes from appearing. |
| COOK-06 | Should | Let visitors favorite dishes locally. | Favoriting is visibly reversible and persists after reload; a clear-all operation requires an explicit user action. |
| COOK-07 | Should | Provide an accessible detail view. | The detail view has a labelled close action, maintains sensible focus, closes with Escape, and restores focus to its trigger. |

Because most existing photographs have no dish metadata, the first implementation should curate 12–20 representative dishes. The remaining photographs can stay unpublished until named and tagged.

### 6.4 About

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| ABOUT-01 | Must | Provide a dedicated personal introduction. | The page explains who Tomoko is, what she enjoys making, and how Games and Cooking relate to her. |
| ABOUT-02 | Must | Keep professional material secondary and concise. | Professional background appears after the personal introduction or through a clearly labelled optional section/link. |
| ABOUT-03 | Should | Support lightweight, maintainable personal updates. | “Currently interested in” or similar content can be edited in one data/content location without changing layout code. |
| ABOUT-04 | Must | Offer clear contact and external profile links. | Links have meaningful accessible names; external destinations are visually distinguishable and use safe new-tab behavior if opened in a new tab. |

## 7. Content and data model

Structured content should be separated from rendering logic where the same content is filtered, featured, or reused.

### Dish record

```json
{
  "id": "stable-slug",
  "name": "Dish name",
  "image": "/assets/images/cooking/example.webp",
  "alt": "Meaningful visual description",
  "categories": ["dinner"],
  "ingredients": ["optional", "tags"],
  "effort": "easy",
  "featured": false,
  "notes": "Optional preparation or memory"
}
```

Stored browser data must include a schema version. Unknown fields may be ignored; invalid records must not prevent the rest of the application from starting. No favorite or game history should be transmitted to a server in the first release.

## 8. Visual and interaction system

- Derive the global palette from the existing navy and the warm amber, cream, and muted green tones in the hero illustration.
- Use semantic tokens rather than page-specific color names: background, surface, text, muted text, accent, border, success, and danger.
- Define shared scales for typography, spacing, radius, shadows, and maximum reading width.
- Allow each primary area one accent color and optional motif while keeping component behavior consistent.
- Prefer cards and inline detail panels over modal-heavy navigation.
- Motion must be brief, purposeful, and disabled or reduced when `prefers-reduced-motion: reduce` is active.
- Do not justify long-form body text; maintain comfortable line length and spacing.
- Define visible hover, active, selected, focus, loading, empty, error, and success states.

## 9. Technical approach

### Proposed structure

```text
/
├── index.html
├── pages/
│   ├── about/index.html
│   ├── cooking/index.html
│   ├── games/index.html
│   ├── games/memory/index.html
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   ├── tokens.css
│   ├── global.css
│   └── components.css
├── js/
│   ├── navigation.js
│   └── storage.js
└── data/
    └── dishes.json
```

GitHub Pages does not provide server-side includes. Shared visual rules and behavior should therefore be centralized, while repeated navigation markup may initially remain in each page and be checked for consistency. Introducing a build step is acceptable later if duplication becomes a demonstrated maintenance problem.

### Dependency policy

- Native HTML, CSS, and JavaScript are preferred for shared UI and local state.
- Remove jQuery, WOW, Animate.css, and unused typing code as their usages are replaced.
- Retain Lottie only for an intentional experience that has a static/reduced-motion fallback.
- Standardize or remove Bootstrap rather than loading different versions across pages.

## 10. Non-functional requirements

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| NFR-01 | Must | Meet WCAG 2.2 AA expectations for core flows. | Automated checks report no critical violations and manual keyboard tests pass for navigation, the first game, and cooking filters/details. |
| NFR-02 | Must | Preserve readable contrast. | Text and controls meet AA contrast ratios in default, hover, focus, selected, and disabled states. |
| NFR-03 | Must | Optimize media. | Gallery content uses appropriately sized responsive formats; source photographs are not downloaded as initial-page thumbnails. |
| NFR-04 | Must | Avoid unexpected data transmission. | Local features function without analytics or account APIs; the contact form clearly identifies the external form service before submission. |
| NFR-05 | Must | Support current mainstream browsers. | Core flows pass in the latest stable Chrome, Firefox, and Safari, including iOS Safari at a mobile viewport. |
| NFR-06 | Should | Remain functional with optional dependencies unavailable. | Missing icons, animation, or individual images degrade locally without hiding primary navigation or text content. |
| NFR-07 | Must | Provide page metadata. | Every primary page has a unique title, description, canonical URL, social metadata, favicon, and meaningful document language. |
| NFR-08 | Should | Keep content maintainable. | Dish records are validated during development or CI, with duplicate IDs and missing required fields reported. |

## 11. Delivery sequence

### Milestone 0 — Stabilize

- Correct malformed HTML, labels, missing requirements, and empty/generic alternative text.
- Remove dead code and inventory assets before deletion.
- Establish baseline accessibility and performance measurements.

### Milestone 1 — Shared foundation and home

- Create design tokens, global styles, shared component conventions, navigation, and footer.
- Replace the current home sections with the three-area launchpad.
- Optimize the hero asset and add responsive behavior.

### Milestone 2 — About and Cooking Ideas

- Move and rewrite existing biography content into About.
- Curate initial dish metadata and implement progressive gallery loading, filters, random selection, and details.

### Milestone 3 — Games

- Build the games collection page.
- Implement and validate the first game, including keyboard play and local results.

### Milestone 4 — Polish and release

- Complete responsive, accessibility, failure-state, cross-browser, metadata, and performance QA.
- Update documentation and preview/deployment checks.

## 12. Acceptance and test matrix

| Area | Normal path | Boundary/failure path |
|---|---|---|
| Navigation | Visit every primary page using pointer and keyboard. | Test at 320 px width, zoom to 200%, and disable JavaScript where text/navigation should remain available. |
| Home | Open every launch card and featured item. | Verify missing optional artwork leaves labelled navigation intact. |
| Game | Start, complete, inspect result, and restart. | Background the page, enable reduced motion, and provide malformed stored progress. |
| Cooking | Filter, choose randomly, open/close details, favorite, and reload. | Test no results, one missing image, malformed dish data, and slow image loading. |
| About | Read content and follow contact/profile links. | Verify long text reflows at narrow width and external links have meaningful names. |
| Metadata | Share or inspect every primary URL. | Verify nested URLs and direct page loads resolve correctly on GitHub Pages. |

## 13. Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Scope grows across four products | The refactor never reaches a polished release | Ship by milestones and limit the first Games release to one game. |
| Existing photos lack metadata | Cooking filters and accessibility remain weak | Curate a smaller initial set instead of guessing dish names. |
| Full-resolution images dominate transfer size | Slow mobile experience | Generate thumbnails/responsive formats and request originals only for details. |
| Page-specific designs drift apart | Site becomes another collection of unrelated pages | Establish shared tokens and component states before feature work. |
| Static-page duplication becomes costly | Navigation/content changes become inconsistent | Add a small build step only after shared static conventions prove insufficient. |
| Browser storage is cleared or unavailable | Visitors lose drafts and favorites | Describe storage as device-local and make empty-state recovery safe; consider export before sync. |

## 14. Decision log

| State | Decision | Rationale |
|---|---|---|
| Confirmed | Expand into Games, Cooking Ideas, and About Me. | Directly requested by the site owner. |
| Confirmed | Exclude Trip Planner from the refactor. | Directly requested by the site owner after the initial plan. |
| Confirmed | The site should be more fun than a professional resume. | Directly requested by the site owner. |
| Inferred | Preserve GitHub Pages compatibility. | Current repository and README identify GitHub Pages as the deployment target. |
| Proposed | Remain framework-free for the first release. | Current scale does not yet justify framework and build complexity. |
| Proposed | Use browser-local persistence without accounts. | Supports interactive features while preserving static hosting and privacy. |
| Proposed | Build a cooking-image memory game first. | Reuses personal assets and provides a contained, testable first game. |
| Proposed | Curate 12–20 dishes initially. | Existing images lack the metadata required for useful filtering and accessibility. |

## 15. Open questions

These decisions do not block foundation work, but should be answered before their respective milestones.

| ID | Question | Default if unanswered | Needed by |
|---|---|---|---|
| Q-01 | What title/theme should unify the site: digital playground, workshop, studio, or something else? | Tomoko's Playground | Home content design |
| Q-02 | Should the first game be a memory game, geography quiz, word puzzle, or another concept? | Memory game using personal images | Games milestone |
| Q-03 | How much professional history should remain public? | A short optional section and profile links on About | About editing |
| Q-04 | Can Tomoko provide dish names/tags for a curated set of photographs? | Use placeholders only in development; do not publicly guess metadata | Cooking content preparation |
| Q-05 | Should contact remain a Formspree form or become simple profile/email links? | Retain Formspree with clearer disclosure and feedback | Shared footer/About |

## 16. Definition of done

The refactor is complete when:

- All first-release pages and the first game satisfy their Must requirements.
- The four areas are reachable through a consistent responsive shell.
- Cooking features recover safely from missing content and unavailable optional services.
- Keyboard, reduced-motion, narrow-screen, and 200% zoom checks pass for all core flows.
- Responsive images prevent the current full-size gallery-loading behavior.
- Page metadata and direct GitHub Pages URLs are verified.
- Automated HTML, link, and accessibility checks run in CI or are documented as repeatable release checks.
- No obsolete resume-first section, dead dependency, or unused script is shipped unintentionally.
- README documentation explains local preview, content editing, validation, and deployment.
