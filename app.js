(() => {
  const search = document.querySelector('#search');
  const category = document.querySelector('#category');
  const recipeList = document.querySelector('#recipe-list');
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  const preferences = [...document.querySelectorAll('.check input')];
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  function render() {
    const found = RecipeFinder.findRecipes(RecipeFinder.recipes, search.value, category.value, preferences.filter((input) => input.checked).map((input) => input.value));
    count.textContent = `${found.length} ${found.length === 1 ? 'recipe' : 'recipes'}`;
    empty.hidden = found.length !== 0;
    recipeList.innerHTML = found.map((recipe) => `<article class="recipe-card"><div class="card-art"><span>${recipe.emoji}</span><small>${recipe.category.toUpperCase()}</small></div><div class="card-body"><div class="card-meta"><span>◷ ${recipe.time} min</span><span>${recipe.dietary.map((tag) => `<b>${escapeHtml(tag === 'glutenFree' ? 'GF' : tag === 'vegetarian' ? 'VEG' : 'V')}</b>`).join(' ')}</span></div><h3>${escapeHtml(recipe.name)}</h3><p>${escapeHtml(recipe.description)}</p><details><summary>Ingredients & method</summary><h4>Ingredients</h4><ul>${recipe.ingredients.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul><h4>Method</h4><ol>${recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol></details></div></article>`).join('');
  }
  [search, category, ...preferences].forEach((control) => control.addEventListener(control === search ? 'input' : 'change', render));
  document.addEventListener('keydown', (event) => { if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) { event.preventDefault(); search.focus(); } });
  render();
})();
