# Sunday — a gentle meal planner

A weekly kitchen planner for people who like the idea of planning more than the admin of it. Seven days, three meals, a box of small recipes and a grocery list that writes itself. Everything is soft-edged, pastel and deliberately unhurried.

The page is a kitchen spread rather than a dashboard: a paper planner on one side, a recipe box on the other, washi tape, ruled grocery paper and a few hand-drawn doodles.

## Features

- Seven-day plan with breakfast, lunch and dinner slots for each day.
- A recipe box of 18 real recipes with times, base servings, ingredient lists and colour-coded cards.
- Tap any empty slot to open a recipe picker filtered to that meal.
- Tap a recipe in the box to hold it, then tap a matching slot to assign it; or drag a card straight onto a slot on desktop.
- Swap or remove any planned meal.
- Household servings control from 1 to 12; grocery quantities scale automatically and round sensibly.
- Automatic grocery list grouped by aisle, with tick-off checkboxes and progress.
- Friendly weekly overview: meals planned out of 21, things to buy and people at the table.
- Week switching with previous, next and "today" controls; every week keeps its own meals, servings and ticks.
- Two-step "clear this week" control, so a whole week cannot vanish by accident.
- A partly planned first week so the app opens with something to look at.
- All weeks, servings and grocery ticks persist in `localStorage`.
- Keyboard tabs, labelled controls, focus states, a polite live region and a reduced-motion mode.
- Responsive down to 390px, with the planner turning into a comfortable single-column list.

## Running it

No build step, no dependencies, no package manager. Open `index.html` in a browser or serve the folder as static files. Google Fonts is the only external request; every illustration is inline SVG, CSS or emoji-free type.

## Files

- `index.html` — the planner spread, recipe box, grocery sheet and recipe picker
- `styles.css` — pastel palette, paper textures, organic shapes and responsive layout
- `app.js` — recipe data, week state, grocery aggregation and interactions
- `README.md` — this document

## Live demo

https://ayo-2010.github.io/sunday/
