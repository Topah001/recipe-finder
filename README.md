# Pantry & Plate — Recipe Finder

A zero-install, static recipe finder for discovering meals from a small, hand-curated local dataset. Search recipe names, descriptions, or ingredients; narrow results by meal category and combine vegetarian, vegan, and gluten-free preferences. Open a card to see its ingredients and cooking steps.

## Run it

Open `index.html` in a modern browser. There is no server, account, package install, or network-backed data requirement. The small set of recipes is embedded in `recipes.js`; edits to the dataset are local source edits.

## Checks

Practical browser smoke checklist: initial recipe cards render; searching `spinach` narrows results to matching recipes; selecting Dinner filters the list; selecting Vegan and Gluten-free together returns recipes satisfying both; a nonsense search shows the empty state; a recipe can be expanded to view ingredients and method. Search also supports `/` as a keyboard shortcut when focus is outside a field.
