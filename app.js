const RECIPES = [
  {
    id: "pancakes",
    name: "Buttermilk Pancakes",
    type: "breakfast",
    time: 25,
    base: 4,
    color: "butter",
    ingredients: [
      { n: "plain flour", q: 240, u: "g", a: "pantry" },
      { n: "buttermilk", q: 400, u: "ml", a: "dairy" },
      { n: "eggs", q: 2, u: "pcs", a: "dairy" },
      { n: "butter", q: 40, u: "g", a: "dairy" },
      { n: "maple syrup", q: 4, u: "tbsp", a: "pantry" },
      { n: "baking powder", q: 2, u: "tsp", a: "pantry" }
    ]
  },
  {
    id: "jammy-eggs",
    name: "Jammy Eggs on Toast",
    type: "breakfast",
    time: 12,
    base: 2,
    color: "peach",
    ingredients: [
      { n: "eggs", q: 4, u: "pcs", a: "dairy" },
      { n: "sourdough bread", q: 4, u: "slice", a: "bakery" },
      { n: "butter", q: 20, u: "g", a: "dairy" },
      { n: "chives", q: 1, u: "bunch", a: "produce" },
      { n: "flaky salt", q: 1, u: "pinch", a: "pantry" }
    ]
  },
  {
    id: "overnight-oats",
    name: "Pear & Oat Jars",
    type: "breakfast",
    time: 10,
    base: 2,
    color: "sage",
    ingredients: [
      { n: "rolled oats", q: 100, u: "g", a: "pantry" },
      { n: "oat milk", q: 300, u: "ml", a: "dairy" },
      { n: "pear", q: 2, u: "pcs", a: "produce" },
      { n: "honey", q: 2, u: "tbsp", a: "pantry" },
      { n: "cinnamon", q: 1, u: "tsp", a: "pantry" },
      { n: "pumpkin seeds", q: 2, u: "tbsp", a: "pantry" }
    ]
  },
  {
    id: "shakshuka",
    name: "Softly Baked Shakshuka",
    type: "breakfast",
    time: 35,
    base: 4,
    color: "peach",
    ingredients: [
      { n: "eggs", q: 6, u: "pcs", a: "dairy" },
      { n: "chopped tomatoes", q: 2, u: "can", a: "pantry" },
      { n: "red pepper", q: 2, u: "pcs", a: "produce" },
      { n: "onion", q: 1, u: "pcs", a: "produce" },
      { n: "garlic", q: 3, u: "clove", a: "produce" },
      { n: "cumin", q: 1, u: "tsp", a: "pantry" },
      { n: "olive oil", q: 2, u: "tbsp", a: "pantry" },
      { n: "parsley", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "yogurt-bowl",
    name: "Yogurt, Honey & Blueberries",
    type: "breakfast",
    time: 5,
    base: 2,
    color: "lilac",
    ingredients: [
      { n: "greek yogurt", q: 400, u: "g", a: "dairy" },
      { n: "honey", q: 2, u: "tbsp", a: "pantry" },
      { n: "granola", q: 100, u: "g", a: "pantry" },
      { n: "blueberries", q: 150, u: "g", a: "produce" }
    ]
  },
  {
    id: "tomato-toast",
    name: "Tomato Toast with Ricotta",
    type: "lunch",
    time: 15,
    base: 2,
    color: "lilac",
    ingredients: [
      { n: "sourdough bread", q: 4, u: "slice", a: "bakery" },
      { n: "ricotta", q: 200, u: "g", a: "dairy" },
      { n: "tomatoes", q: 3, u: "pcs", a: "produce" },
      { n: "olive oil", q: 1, u: "tbsp", a: "pantry" },
      { n: "basil", q: 1, u: "bunch", a: "produce" },
      { n: "lemon", q: 1, u: "pcs", a: "produce" }
    ]
  },
  {
    id: "pea-soup",
    name: "Garden Pea & Mint Soup",
    type: "lunch",
    time: 30,
    base: 4,
    color: "sage",
    ingredients: [
      { n: "frozen peas", q: 600, u: "g", a: "frozen" },
      { n: "leek", q: 1, u: "pcs", a: "produce" },
      { n: "potato", q: 2, u: "pcs", a: "produce" },
      { n: "vegetable stock", q: 1, u: "l", a: "pantry" },
      { n: "butter", q: 30, u: "g", a: "dairy" },
      { n: "mint", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "halloumi-salad",
    name: "Halloumi & Herb Salad",
    type: "lunch",
    time: 20,
    base: 2,
    color: "sage",
    ingredients: [
      { n: "halloumi", q: 225, u: "g", a: "dairy" },
      { n: "cucumber", q: 1, u: "pcs", a: "produce" },
      { n: "cherry tomatoes", q: 200, u: "g", a: "produce" },
      { n: "lemon", q: 1, u: "pcs", a: "produce" },
      { n: "olive oil", q: 2, u: "tbsp", a: "pantry" },
      { n: "mixed leaves", q: 100, u: "g", a: "produce" },
      { n: "pita", q: 2, u: "pcs", a: "bakery" }
    ]
  },
  {
    id: "squash-bowl",
    name: "Squash & Tahini Grain Bowl",
    type: "lunch",
    time: 40,
    base: 4,
    color: "butter",
    ingredients: [
      { n: "butternut squash", q: 1, u: "pcs", a: "produce" },
      { n: "quinoa", q: 200, u: "g", a: "pantry" },
      { n: "chickpeas", q: 1, u: "can", a: "pantry" },
      { n: "feta", q: 100, u: "g", a: "dairy" },
      { n: "spinach", q: 120, u: "g", a: "produce" },
      { n: "tahini", q: 3, u: "tbsp", a: "pantry" },
      { n: "lemon", q: 1, u: "pcs", a: "produce" }
    ]
  },
  {
    id: "chicken-soup",
    name: "Chicken Soup with Orzo",
    type: "lunch",
    time: 45,
    base: 4,
    color: "peach",
    ingredients: [
      { n: "chicken thighs", q: 500, u: "g", a: "protein" },
      { n: "orzo", q: 150, u: "g", a: "pantry" },
      { n: "carrot", q: 2, u: "pcs", a: "produce" },
      { n: "celery", q: 3, u: "pcs", a: "produce" },
      { n: "onion", q: 1, u: "pcs", a: "produce" },
      { n: "vegetable stock", q: 1.5, u: "l", a: "pantry" },
      { n: "parsley", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "cheese-sandwich",
    name: "Cheddar, Pickle & Apple",
    type: "lunch",
    time: 8,
    base: 2,
    color: "butter",
    ingredients: [
      { n: "cheddar", q: 120, u: "g", a: "dairy" },
      { n: "sourdough bread", q: 4, u: "slice", a: "bakery" },
      { n: "pickles", q: 4, u: "tbsp", a: "pantry" },
      { n: "butter", q: 30, u: "g", a: "dairy" },
      { n: "apple", q: 1, u: "pcs", a: "produce" }
    ]
  },
  {
    id: "lemon-pasta",
    name: "Lemon Butter Pasta",
    type: "dinner",
    time: 25,
    base: 4,
    color: "butter",
    ingredients: [
      { n: "spaghetti", q: 400, u: "g", a: "pantry" },
      { n: "lemon", q: 2, u: "pcs", a: "produce" },
      { n: "butter", q: 80, u: "g", a: "dairy" },
      { n: "parmesan", q: 60, u: "g", a: "dairy" },
      { n: "garlic", q: 2, u: "clove", a: "produce" },
      { n: "parsley", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "roast-chicken",
    name: "Sunday Roast Chicken",
    type: "dinner",
    time: 90,
    base: 4,
    color: "peach",
    ingredients: [
      { n: "whole chicken", q: 1.6, u: "kg", a: "protein" },
      { n: "potatoes", q: 800, u: "g", a: "produce" },
      { n: "carrot", q: 4, u: "pcs", a: "produce" },
      { n: "onion", q: 2, u: "pcs", a: "produce" },
      { n: "olive oil", q: 3, u: "tbsp", a: "pantry" },
      { n: "thyme", q: 1, u: "bunch", a: "produce" },
      { n: "lemon", q: 1, u: "pcs", a: "produce" }
    ]
  },
  {
    id: "coconut-dal",
    name: "Coconut Dal with Rice",
    type: "dinner",
    time: 35,
    base: 4,
    color: "sage",
    ingredients: [
      { n: "red lentils", q: 300, u: "g", a: "pantry" },
      { n: "coconut milk", q: 1, u: "can", a: "pantry" },
      { n: "onion", q: 1, u: "pcs", a: "produce" },
      { n: "garlic", q: 3, u: "clove", a: "produce" },
      { n: "ginger", q: 30, u: "g", a: "produce" },
      { n: "curry powder", q: 2, u: "tbsp", a: "pantry" },
      { n: "rice", q: 300, u: "g", a: "pantry" },
      { n: "coriander", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "salmon-greens",
    name: "Sheet-Pan Salmon & Greens",
    type: "dinner",
    time: 30,
    base: 2,
    color: "lilac",
    ingredients: [
      { n: "salmon fillets", q: 2, u: "pcs", a: "protein" },
      { n: "tenderstem broccoli", q: 200, u: "g", a: "produce" },
      { n: "new potatoes", q: 400, u: "g", a: "produce" },
      { n: "olive oil", q: 2, u: "tbsp", a: "pantry" },
      { n: "lemon", q: 1, u: "pcs", a: "produce" }
    ]
  },
  {
    id: "mushroom-risotto",
    name: "Mushroom Risotto",
    type: "dinner",
    time: 45,
    base: 4,
    color: "peach",
    ingredients: [
      { n: "arborio rice", q: 320, u: "g", a: "pantry" },
      { n: "mushrooms", q: 400, u: "g", a: "produce" },
      { n: "vegetable stock", q: 1.2, u: "l", a: "pantry" },
      { n: "parmesan", q: 60, u: "g", a: "dairy" },
      { n: "butter", q: 50, u: "g", a: "dairy" },
      { n: "onion", q: 1, u: "pcs", a: "produce" },
      { n: "thyme", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "slow-beans",
    name: "Slow Beans on Toast",
    type: "dinner",
    time: 30,
    base: 2,
    color: "sage",
    ingredients: [
      { n: "butter beans", q: 2, u: "can", a: "pantry" },
      { n: "sourdough bread", q: 4, u: "slice", a: "bakery" },
      { n: "garlic", q: 2, u: "clove", a: "produce" },
      { n: "tomato passata", q: 300, u: "ml", a: "pantry" },
      { n: "olive oil", q: 2, u: "tbsp", a: "pantry" },
      { n: "parsley", q: 1, u: "bunch", a: "produce" }
    ]
  },
  {
    id: "pizza-night",
    name: "Friday Pizza Night",
    type: "dinner",
    time: 40,
    base: 4,
    color: "peach",
    ingredients: [
      { n: "pizza dough", q: 2, u: "pcs", a: "bakery" },
      { n: "tomato passata", q: 400, u: "ml", a: "pantry" },
      { n: "mozzarella", q: 250, u: "g", a: "dairy" },
      { n: "basil", q: 1, u: "bunch", a: "produce" },
      { n: "olive oil", q: 2, u: "tbsp", a: "pantry" },
      { n: "mushrooms", q: 200, u: "g", a: "produce" }
    ]
  }
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MEALS = ["breakfast", "lunch", "dinner"];
const STORAGE_KEY = "sunday-planner-v1";
const AISLES = [
  { id: "produce", label: "Fruit & veg" },
  { id: "dairy", label: "Dairy & eggs" },
  { id: "bakery", label: "Bakery" },
  { id: "protein", label: "Meat & fish" },
  { id: "pantry", label: "Pantry" },
  { id: "frozen", label: "Frozen" }
];
const ACCENT = {
  lilac: "#d8bfe4",
  peach: "#f2bfa8",
  sage: "#b9cba7",
  butter: "#ead681"
};

const baseMonday = startOfWeek(new Date());
const stored = loadState();

const state = {
  offset: stored && Number.isFinite(stored.offset) ? clamp(Math.round(stored.offset), -30, 30) : 0,
  weeks: stored ? sanitizeWeeks(stored.weeks) : {},
  tab: "week",
  hand: null,
  recipeFilter: "all",
  search: "",
  picker: null,
  pickerSearch: "",
  clearArmed: false
};

if (!Object.keys(state.weeks).length) {
  state.weeks[isoDate(addDays(baseMonday, state.offset * 7))] = makeDefaultWeek();
}

let dragRecipeId = null;
let clearTimer = null;
let lastFocus = null;

const els = {
  weekGrid: document.getElementById("week-grid"),
  weekKicker: document.getElementById("week-kicker"),
  weekRange: document.getElementById("week-range"),
  weekNote: document.getElementById("week-note"),
  prevWeek: document.getElementById("prev-week"),
  nextWeek: document.getElementById("next-week"),
  today: document.getElementById("today"),
  servings: document.getElementById("servings"),
  servingsMinus: document.getElementById("servings-minus"),
  servingsPlus: document.getElementById("servings-plus"),
  statMeals: document.getElementById("stat-meals"),
  statGroceries: document.getElementById("stat-groceries"),
  statPeople: document.getElementById("stat-people"),
  plannedCount: document.getElementById("planned-count"),
  plannerTitle: document.getElementById("planner-title"),
  tabWeek: document.getElementById("tab-week"),
  tabGroceries: document.getElementById("tab-groceries"),
  tabCount: document.getElementById("tab-count"),
  panelWeek: document.getElementById("panel-week"),
  panelGroceries: document.getElementById("panel-groceries"),
  clearWeek: document.getElementById("clear-week"),
  handNote: document.getElementById("hand-note"),
  handName: document.getElementById("hand-name"),
  handMeal: document.getElementById("hand-meal"),
  handCancel: document.getElementById("hand-cancel"),
  recipeList: document.getElementById("recipe-list"),
  recipeCount: document.getElementById("recipe-count"),
  recipeSearch: document.getElementById("recipe-search"),
  recipeFilters: document.getElementById("recipe-filters"),
  recipeEmpty: document.getElementById("recipe-empty"),
  groceryGroups: document.getElementById("grocery-groups"),
  groceryEmpty: document.getElementById("grocery-empty"),
  groceryFoot: document.getElementById("grocery-foot"),
  grocerySub: document.getElementById("grocery-sub"),
  groceryProgress: document.getElementById("grocery-progress"),
  basketFill: document.getElementById("basket-fill"),
  resetTicks: document.getElementById("reset-ticks"),
  toPlan: document.getElementById("to-plan"),
  picker: document.getElementById("picker"),
  pickerKicker: document.getElementById("picker-kicker"),
  pickerTitle: document.getElementById("picker-title"),
  pickerSearch: document.getElementById("picker-search"),
  pickerList: document.getElementById("picker-list"),
  pickerEmpty: document.getElementById("picker-empty"),
  pickerClose: document.getElementById("picker-close"),
  status: document.getElementById("status")
};

function startOfWeek(date) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const shift = (copy.getDay() + 6) % 7;
  copy.setDate(copy.getDate() - shift);
  return copy;
}

function addDays(date, amount) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function recipeById(id) {
  return RECIPES.find((recipe) => recipe.id === id) || null;
}

function makeDefaultWeek() {
  return {
    meals: {
      "0": { dinner: "lemon-pasta" },
      "1": { breakfast: "overnight-oats", lunch: "tomato-toast" },
      "2": { dinner: "coconut-dal" },
      "3": { breakfast: "jammy-eggs" },
      "4": { dinner: "pizza-night" },
      "5": { breakfast: "pancakes", dinner: "salmon-greens" },
      "6": { lunch: "roast-chicken", dinner: "slow-beans" }
    },
    servings: 4,
    checked: []
  };
}

function sanitizeWeeks(raw) {
  const clean = {};
  if (!raw || typeof raw !== "object") return clean;
  Object.keys(raw).forEach((key) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return;
    const week = raw[key];
    if (!week || typeof week !== "object") return;
    const meals = {};
    if (week.meals && typeof week.meals === "object") {
      DAYS.forEach((day, index) => {
        const dayMeals = week.meals[index];
        if (!dayMeals || typeof dayMeals !== "object") return;
        MEALS.forEach((meal) => {
          const id = dayMeals[meal];
          const recipe = recipeById(id);
          if (recipe && recipe.type === meal) {
            if (!meals[index]) meals[index] = {};
            meals[index][meal] = id;
          }
        });
      });
    }
    clean[key] = {
      meals,
      servings: Number.isFinite(week.servings) ? clamp(Math.round(week.servings), 1, 12) : 4,
      checked: Array.isArray(week.checked) ? week.checked.filter((item) => typeof item === "string") : []
    };
  });
  return clean;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch (error) {
    return null;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ offset: state.offset, weeks: state.weeks }));
  } catch (error) {
    return;
  }
}

function currentMonday() {
  return addDays(baseMonday, state.offset * 7);
}

function weekKey() {
  return isoDate(currentMonday());
}

function ensureWeek() {
  const key = weekKey();
  if (!state.weeks[key]) {
    state.weeks[key] = { meals: {}, servings: 4, checked: [] };
  }
  const week = state.weeks[key];
  if (!week.meals) week.meals = {};
  if (!Array.isArray(week.checked)) week.checked = [];
  if (!Number.isFinite(week.servings)) week.servings = 4;
  return week;
}

function announce(message) {
  els.status.textContent = "";
  window.setTimeout(() => {
    els.status.textContent = message;
  }, 40);
}

function formatQty(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

function tidyQty(value, unit) {
  if (unit === "pcs") return Math.max(1, Math.round(value));
  if (unit === "g" || unit === "ml") {
    if (value >= 100) return Math.round(value / 5) * 5;
    if (value >= 20) return Math.round(value);
    return Math.round(value * 10) / 10;
  }
  if (unit === "kg" || unit === "l") return Math.round(value * 10) / 10;
  if (unit === "tbsp" || unit === "tsp") return Math.round(value * 2) / 2;
  if (unit === "can" || unit === "slice" || unit === "clove" || unit === "bunch") {
    return Math.max(0.5, Math.round(value * 2) / 2);
  }
  return Math.max(1, Math.round(value));
}

function unitLabel(unit, qty) {
  if (qty <= 1) {
    if (unit === "slice") return "slice";
    if (unit === "can") return "can";
    if (unit === "clove") return "clove";
    if (unit === "bunch") return "bunch";
    return unit;
  }
  if (unit === "slice") return "slices";
  if (unit === "can") return "cans";
  if (unit === "clove") return "cloves";
  if (unit === "bunch") return "bunches";
  return unit;
}

function formatRange() {
  const monday = currentMonday();
  const sunday = addDays(monday, 6);
  const startMonth = monday.toLocaleDateString("en-GB", { month: "short" });
  const endMonth = sunday.toLocaleDateString("en-GB", { month: "short" });
  if (monday.getMonth() === sunday.getMonth()) {
    return monday.getDate() + " – " + sunday.getDate() + " " + startMonth;
  }
  return monday.getDate() + " " + startMonth + " – " + sunday.getDate() + " " + endMonth;
}

function kickerText() {
  if (state.offset === 0) return "This week";
  if (state.offset === 1) return "Next week";
  if (state.offset === -1) return "Last week";
  if (state.offset > 1) return "In " + state.offset + " weeks";
  return Math.abs(state.offset) + " weeks ago";
}

function plannerTitleText() {
  if (state.offset === 0) return "This week's table";
  if (state.offset === 1) return "Next week's table";
  if (state.offset === -1) return "Last week's table";
  return "The week's table";
}

function mealCount() {
  const week = ensureWeek();
  let total = 0;
  DAYS.forEach((day, index) => {
    const dayMeals = week.meals[index];
    if (!dayMeals) return;
    MEALS.forEach((meal) => {
      if (dayMeals[meal] && recipeById(dayMeals[meal])) total += 1;
    });
  });
  return total;
}

function buildGroceries() {
  const week = ensureWeek();
  const map = new Map();
  DAYS.forEach((day, index) => {
    const dayMeals = week.meals[index];
    if (!dayMeals) return;
    MEALS.forEach((meal) => {
      const recipe = recipeById(dayMeals[meal]);
      if (!recipe) return;
      const factor = week.servings / recipe.base;
      recipe.ingredients.forEach((ingredient) => {
        const key = ingredient.n + "|" + ingredient.u;
        if (!map.has(key)) {
          map.set(key, { key, name: ingredient.n, unit: ingredient.u, qty: 0, aisle: ingredient.a });
        }
        map.get(key).qty += ingredient.q * factor;
      });
    });
  });
  const list = Array.from(map.values()).map((item) => {
    return {
      key: item.key,
      name: item.name,
      unit: item.unit,
      aisle: item.aisle,
      qty: tidyQty(item.qty, item.unit)
    };
  });
  list.sort((a, b) => {
    const aisleA = AISLES.findIndex((aisle) => aisle.id === a.aisle);
    const aisleB = AISLES.findIndex((aisle) => aisle.id === b.aisle);
    if (aisleA !== aisleB) return aisleA - aisleB;
    return a.name.localeCompare(b.name);
  });
  return list;
}

function weekNote(count) {
  if (count === 0) return "A blank week, full of possibility. Start anywhere.";
  if (count <= 4) return "A gentle start. A few good meals is a fine week.";
  if (count <= 9) return "The week is taking shape. The kettle is on.";
  if (count < 20) return "Mostly planned, with room for leftovers and whim.";
  return "Every plate is planned. Put your feet up, Sunday.";
}

function renderHeader() {
  const week = ensureWeek();
  const count = mealCount();
  const groceries = buildGroceries();
  els.weekKicker.textContent = kickerText();
  els.weekRange.textContent = formatRange();
  els.weekNote.textContent = weekNote(count);
  els.statMeals.textContent = String(count);
  els.statGroceries.textContent = String(groceries.length);
  els.statPeople.textContent = String(week.servings);
  els.plannedCount.textContent = String(count);
  els.plannerTitle.textContent = plannerTitleText();
  els.tabCount.textContent = String(groceries.length);
  els.grocerySub.textContent = count + (count === 1 ? " meal" : " meals") + " planned for " + week.servings + (week.servings === 1 ? " person" : " people") + " · " + groceries.length + " things to pick up.";
  if (document.activeElement !== els.servings) els.servings.value = String(week.servings);
  els.servings.setAttribute("aria-label", "Number of people at the table");
}

function renderWeek() {
  const week = ensureWeek();
  const monday = currentMonday();
  const todayIso = isoDate(new Date());
  const handRecipe = recipeById(state.hand);
  const fragment = document.createDocumentFragment();
  let suggestedSlot = null;

  DAYS.forEach((day, index) => {
    const date = addDays(monday, index);
    const row = document.createElement("div");
    row.className = "day-row";
    if (index >= 5) row.classList.add("is-weekend");
    if (isoDate(date) === todayIso) row.classList.add("is-today");

    const label = document.createElement("div");
    label.className = "day-label";
    const name = document.createElement("span");
    name.className = "day-name";
    name.textContent = day;
    const dateLabel = document.createElement("span");
    dateLabel.className = "day-date";
    dateLabel.textContent = date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    label.appendChild(name);
    label.appendChild(dateLabel);
    row.appendChild(label);

    const slots = document.createElement("div");
    slots.className = "day-slots";

    MEALS.forEach((meal) => {
      const slot = document.createElement("div");
      slot.className = "slot";
      slot.dataset.day = String(index);
      slot.dataset.meal = meal;
      const dayMeals = week.meals[index] || {};
      const recipe = recipeById(dayMeals[meal]);

      const slotLabel = document.createElement("span");
      slotLabel.className = "slot-label";
      slotLabel.textContent = meal;
      slot.appendChild(slotLabel);

      if (recipe) {
        slot.classList.add("is-filled", "tint-" + recipe.color);
        const main = document.createElement("button");
        main.type = "button";
        main.className = "slot-main";
        main.setAttribute("aria-label", "Change " + day + " " + meal + ": " + recipe.name);
        const title = document.createElement("span");
        title.className = "slot-name";
        title.textContent = recipe.name;
        const meta = document.createElement("span");
        meta.className = "slot-meta";
        meta.textContent = recipe.time + " min · serves " + week.servings;
        main.appendChild(title);
        main.appendChild(meta);
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "slot-clear";
        remove.dataset.remove = "true";
        remove.setAttribute("aria-label", "Remove " + recipe.name + " from " + day + " " + meal);
        remove.textContent = "×";
        slot.appendChild(main);
        slot.appendChild(remove);
      } else {
        const add = document.createElement("button");
        add.type = "button";
        add.className = "slot-add";
        add.setAttribute("aria-label", "Add a " + meal + " for " + day);
        const plus = document.createElement("span");
        plus.className = "slot-plus";
        plus.setAttribute("aria-hidden", "true");
        plus.textContent = "+";
        const text = document.createElement("span");
        text.textContent = "add " + meal;
        add.appendChild(plus);
        add.appendChild(text);
        slot.appendChild(add);
      }

      if (handRecipe && handRecipe.type === meal) {
        slot.classList.add("is-suggested");
        if (!suggestedSlot) suggestedSlot = slot;
      }

      slots.appendChild(slot);
    });

    row.appendChild(slots);
    fragment.appendChild(row);
  });

  els.weekGrid.innerHTML = "";
  els.weekGrid.appendChild(fragment);
  return suggestedSlot;
}

function accentFor(color) {
  return ACCENT[color] || ACCENT.lilac;
}

function matchesFilter(recipe) {
  if (state.recipeFilter !== "all" && recipe.type !== state.recipeFilter) return false;
  if (!state.search) return true;
  const haystack = (recipe.name + " " + recipe.type + " " + recipe.ingredients.map((item) => item.n).join(" ")).toLowerCase();
  return haystack.includes(state.search);
}

function renderRecipeBank() {
  const filtered = RECIPES.filter(matchesFilter);
  els.recipeList.innerHTML = "";
  const fragment = document.createDocumentFragment();
  filtered.forEach((recipe) => {
    const card = document.createElement("article");
    card.className = "recipe-card";
    if (state.hand === recipe.id) card.classList.add("is-in-hand");
    card.dataset.recipe = recipe.id;
    card.draggable = true;
    card.style.setProperty("--accent", accentFor(recipe.color));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "recipe-pick";
    button.dataset.pick = recipe.id;
    button.setAttribute("aria-label", "Hold " + recipe.name + " to add it to a " + recipe.type + " slot");
    const tag = document.createElement("span");
    tag.className = "recipe-tag";
    tag.textContent = recipe.type + " · " + recipe.time + " min · serves " + recipe.base;
    const name = document.createElement("strong");
    name.textContent = recipe.name;
    const teaser = document.createElement("span");
    teaser.className = "recipe-teaser";
    teaser.textContent = recipe.ingredients.slice(0, 3).map((item) => item.n).join(" · ");
    button.appendChild(tag);
    button.appendChild(name);
    button.appendChild(teaser);
    card.appendChild(button);
    fragment.appendChild(card);
  });
  els.recipeList.appendChild(fragment);
  els.recipeCount.textContent = filtered.length === RECIPES.length ? RECIPES.length + " recipes" : filtered.length + " of " + RECIPES.length;
  els.recipeEmpty.hidden = filtered.length > 0;
  Array.from(els.recipeFilters.querySelectorAll("[data-filter]")).forEach((button) => {
    const active = button.dataset.filter === state.recipeFilter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderGroceries() {
  const week = ensureWeek();
  const list = buildGroceries();
  els.groceryGroups.innerHTML = "";
  const fragment = document.createDocumentFragment();
  AISLES.forEach((aisle) => {
    const items = list.filter((item) => item.aisle === aisle.id);
    if (!items.length) return;
    const group = document.createElement("section");
    group.className = "grocery-group";
    const heading = document.createElement("h3");
    heading.textContent = aisle.label;
    const ul = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const checked = week.checked.includes(item.key);
      label.className = "grocery-item" + (checked ? " is-checked" : "");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = checked;
      input.dataset.key = item.key;
      input.setAttribute("aria-label", item.name + " " + formatQty(item.qty) + " " + unitLabel(item.unit, item.qty));
      const name = document.createElement("span");
      name.className = "grocery-name";
      name.textContent = item.name;
      const qty = document.createElement("span");
      qty.className = "grocery-qty";
      qty.textContent = formatQty(item.qty) + " " + unitLabel(item.unit, item.qty);
      label.appendChild(input);
      label.appendChild(name);
      label.appendChild(qty);
      li.appendChild(label);
      ul.appendChild(li);
    });
    group.appendChild(heading);
    group.appendChild(ul);
    fragment.appendChild(group);
  });
  els.groceryGroups.appendChild(fragment);
  const empty = list.length === 0;
  els.groceryEmpty.hidden = !empty;
  els.groceryGroups.hidden = empty;
  els.groceryFoot.hidden = empty;
  updateGroceryProgress(list);
}

function updateGroceryProgress(list) {
  const week = ensureWeek();
  const items = list || buildGroceries();
  const gathered = items.filter((item) => week.checked.includes(item.key)).length;
  const total = items.length;
  if (!total) {
    els.groceryProgress.textContent = "Nothing on the list yet";
    els.basketFill.style.width = "0%";
    return;
  }
  if (gathered === total) {
    els.groceryProgress.textContent = "All gathered · " + total + " of " + total;
  } else {
    els.groceryProgress.textContent = gathered + " of " + total + " gathered";
  }
  els.basketFill.style.width = (gathered / total) * 100 + "%";
}

function updateHandNote() {
  const recipe = recipeById(state.hand);
  if (!recipe) {
    els.handNote.hidden = true;
    return;
  }
  els.handNote.hidden = false;
  els.handName.textContent = recipe.name;
  els.handMeal.textContent = recipe.type;
}

function syncHandCards() {
  Array.from(els.recipeList.querySelectorAll(".recipe-card")).forEach((card) => {
    card.classList.toggle("is-in-hand", card.dataset.recipe === state.hand);
  });
}

function setHand(id) {
  state.hand = id;
  syncHandCards();
  renderWeek();
  updateHandNote();
  const recipe = recipeById(id);
  if (recipe) {
    announce("Holding " + recipe.name + ". Tap a " + recipe.type + " slot, or tap another recipe.");
    if (window.matchMedia("(max-width: 1120px)").matches) {
      const planner = document.querySelector(".planner");
      if (planner) planner.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }
}

function clearHand(tell) {
  if (!state.hand) return;
  state.hand = null;
  syncHandCards();
  renderWeek();
  updateHandNote();
  if (tell) announce("Recipe put back in the box.");
}

function assignRecipe(dayIndex, meal, recipeId) {
  const recipe = recipeById(recipeId);
  if (!recipe || recipe.type !== meal) return;
  const week = ensureWeek();
  if (!week.meals[dayIndex]) week.meals[dayIndex] = {};
  const previous = week.meals[dayIndex][meal];
  week.meals[dayIndex][meal] = recipe.id;
  state.hand = null;
  if (state.picker) closePicker(false);
  saveState();
  renderHeader();
  renderWeek();
  renderRecipeBank();
  renderGroceries();
  updateHandNote();
  focusSlot(dayIndex, meal);
  const day = DAYS[dayIndex];
  announce(recipe.name + (previous ? " swapped into " : " added to ") + day + " " + meal + ".");
}

function removeRecipe(dayIndex, meal) {
  const week = ensureWeek();
  const recipe = recipeById(week.meals[dayIndex] ? week.meals[dayIndex][meal] : null);
  if (!recipe) return;
  delete week.meals[dayIndex][meal];
  if (!Object.keys(week.meals[dayIndex]).length) delete week.meals[dayIndex];
  saveState();
  renderAll();
  focusSlot(dayIndex, meal);
  announce(recipe.name + " removed from " + DAYS[dayIndex] + " " + meal + ".");
}

function focusSlot(dayIndex, meal) {
  const slot = els.weekGrid.querySelector('[data-day="' + dayIndex + '"][data-meal="' + meal + '"]');
  if (!slot) return;
  const target = slot.querySelector(".slot-main") || slot.querySelector(".slot-add");
  if (target) target.focus({ preventScroll: true });
}

function openPicker(dayIndex, meal) {
  clearHand(false);
  state.picker = { day: dayIndex, meal };
  state.pickerSearch = "";
  els.pickerSearch.value = "";
  els.pickerKicker.textContent = DAYS[dayIndex] + " · " + meal;
  els.pickerTitle.textContent = "Choose a " + meal;
  renderPickerList();
  lastFocus = document.activeElement;
  els.picker.hidden = false;
  document.body.style.overflow = "hidden";
  window.setTimeout(() => els.pickerSearch.focus(), 50);
}

function closePicker(restoreFocus) {
  if (!state.picker) return;
  els.picker.hidden = true;
  document.body.style.overflow = "";
  state.picker = null;
  state.pickerSearch = "";
  if (restoreFocus !== false && lastFocus && lastFocus.isConnected) {
    lastFocus.focus({ preventScroll: true });
  }
}

function renderPickerList() {
  if (!state.picker) return;
  const query = state.pickerSearch.toLowerCase();
  const filtered = RECIPES.filter((recipe) => {
    if (recipe.type !== state.picker.meal) return false;
    if (!query) return true;
    const haystack = (recipe.name + " " + recipe.ingredients.map((item) => item.n).join(" ")).toLowerCase();
    return haystack.includes(query);
  });
  els.pickerList.innerHTML = filtered.map((recipe) => {
    return '<button type="button" class="picker-card" data-pick="' + recipe.id + '" aria-label="Add ' + recipe.name + ' to ' + DAYS[state.picker.day] + " " + state.picker.meal + '">' +
      '<span class="recipe-tag">' + recipe.type + " · " + recipe.time + " min</span>" +
      "<strong>" + recipe.name + "</strong>" +
      '<span class="picker-meta">serves ' + recipe.base + " · " + recipe.ingredients.slice(0, 3).map((item) => item.n).join(" · ") + "</span>" +
      "</button>";
  }).join("");
  els.pickerEmpty.hidden = filtered.length > 0;
}

function setServings(value) {
  const week = ensureWeek();
  const next = clamp(Math.round(Number(value)) || week.servings, 1, 12);
  week.servings = next;
  saveState();
  renderHeader();
  renderWeek();
  renderGroceries();
  announce("Cooking for " + next + (next === 1 ? " person." : " people."));
}

function setTab(tab) {
  state.tab = tab;
  const weekActive = tab === "week";
  els.tabWeek.classList.toggle("is-active", weekActive);
  els.tabGroceries.classList.toggle("is-active", !weekActive);
  els.tabWeek.setAttribute("aria-selected", String(weekActive));
  els.tabGroceries.setAttribute("aria-selected", String(!weekActive));
  els.tabWeek.tabIndex = weekActive ? 0 : -1;
  els.tabGroceries.tabIndex = weekActive ? -1 : 0;
  els.panelWeek.hidden = !weekActive;
  els.panelGroceries.hidden = weekActive;
  if (!weekActive) renderGroceries();
}

function resetClearButton() {
  state.clearArmed = false;
  window.clearTimeout(clearTimer);
  els.clearWeek.classList.remove("is-armed");
  els.clearWeek.textContent = "Clear this week";
}

function shiftWeek(delta) {
  state.offset = clamp(state.offset + delta, -30, 30);
  state.hand = null;
  resetClearButton();
  ensureWeek();
  saveState();
  renderAll();
  updateHandNote();
  announce(kickerText() + ": " + formatRange() + ".");
}

function clearWeek() {
  if (!state.clearArmed) {
    state.clearArmed = true;
    els.clearWeek.classList.add("is-armed");
    els.clearWeek.textContent = "Really clear this week?";
    announce("Press again to clear all meals for this week.");
    window.clearTimeout(clearTimer);
    clearTimer = window.setTimeout(resetClearButton, 5000);
    return;
  }
  const week = ensureWeek();
  week.meals = {};
  week.checked = [];
  resetClearButton();
  saveState();
  renderAll();
  announce("The week is clear. A fresh page.");
}

function toggleTick(key, checked) {
  const week = ensureWeek();
  if (checked) {
    if (!week.checked.includes(key)) week.checked.push(key);
  } else {
    week.checked = week.checked.filter((item) => item !== key);
  }
  saveState();
  const total = buildGroceries();
  Array.from(els.groceryGroups.querySelectorAll(".grocery-item")).forEach((label) => {
    const input = label.querySelector("input");
    if (input && input.dataset.key === key) label.classList.toggle("is-checked", checked);
  });
  updateGroceryProgress(total);
  renderHeader();
}

function renderAll() {
  renderHeader();
  renderWeek();
  renderRecipeBank();
  renderGroceries();
  updateHandNote();
  syncHandCards();
}

els.weekGrid.addEventListener("click", (event) => {
  const slot = event.target.closest(".slot");
  if (!slot) return;
  const day = Number(slot.dataset.day);
  const meal = slot.dataset.meal;
  if (event.target.closest("[data-remove]")) {
    removeRecipe(day, meal);
    return;
  }
  const action = event.target.closest(".slot-main, .slot-add");
  if (!action) return;
  const handRecipe = recipeById(state.hand);
  if (handRecipe && handRecipe.type === meal) {
    assignRecipe(day, meal, handRecipe.id);
  } else {
    openPicker(day, meal);
  }
});

els.weekGrid.addEventListener("dragover", (event) => {
  const slot = event.target.closest(".slot");
  const recipe = recipeById(dragRecipeId);
  if (!slot || !recipe || recipe.type !== slot.dataset.meal) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
  els.weekGrid.querySelectorAll(".slot.is-over").forEach((item) => item.classList.remove("is-over"));
  slot.classList.add("is-over");
});

els.weekGrid.addEventListener("dragleave", (event) => {
  if (!els.weekGrid.contains(event.relatedTarget)) {
    els.weekGrid.querySelectorAll(".slot.is-over").forEach((item) => item.classList.remove("is-over"));
  }
});

els.weekGrid.addEventListener("drop", (event) => {
  const slot = event.target.closest(".slot");
  if (!slot) return;
  const recipe = recipeById(dragRecipeId);
  if (!recipe || recipe.type !== slot.dataset.meal) return;
  event.preventDefault();
  dragRecipeId = null;
  els.weekGrid.querySelectorAll(".slot.is-over").forEach((item) => item.classList.remove("is-over"));
  assignRecipe(Number(slot.dataset.day), slot.dataset.meal, recipe.id);
});

els.recipeList.addEventListener("click", (event) => {
  const pick = event.target.closest("[data-pick]");
  if (!pick) return;
  const id = pick.dataset.pick;
  if (state.hand === id) {
    clearHand(true);
  } else {
    setHand(id);
  }
});

els.recipeList.addEventListener("dragstart", (event) => {
  const card = event.target.closest(".recipe-card");
  if (!card) return;
  dragRecipeId = card.dataset.recipe;
  card.classList.add("is-dragging");
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "copy";
    event.dataTransfer.setData("text/plain", dragRecipeId);
  }
});

els.recipeList.addEventListener("dragend", () => {
  dragRecipeId = null;
  Array.from(els.recipeList.querySelectorAll(".recipe-card")).forEach((card) => card.classList.remove("is-dragging"));
  els.weekGrid.querySelectorAll(".slot.is-over").forEach((item) => item.classList.remove("is-over"));
});

els.recipeSearch.addEventListener("input", () => {
  state.search = els.recipeSearch.value.trim().toLowerCase();
  renderRecipeBank();
});

els.recipeFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.recipeFilter = button.dataset.filter;
  renderRecipeBank();
});

els.handCancel.addEventListener("click", () => clearHand(true));

els.prevWeek.addEventListener("click", () => shiftWeek(-1));
els.nextWeek.addEventListener("click", () => shiftWeek(1));
els.today.addEventListener("click", () => {
  if (state.offset === 0) {
    announce("You are already looking at this week.");
    return;
  }
  state.offset = 0;
  state.hand = null;
  resetClearButton();
  ensureWeek();
  saveState();
  renderAll();
  updateHandNote();
  announce("Back to this week.");
});

els.servingsMinus.addEventListener("click", () => setServings(ensureWeek().servings - 1));
els.servingsPlus.addEventListener("click", () => setServings(ensureWeek().servings + 1));
els.servings.addEventListener("change", () => setServings(els.servings.value));

els.clearWeek.addEventListener("click", clearWeek);

els.tabWeek.addEventListener("click", () => setTab("week"));
els.tabGroceries.addEventListener("click", () => setTab("groceries"));

document.querySelector(".tabs").addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  const next = state.tab === "week" ? "groceries" : "week";
  setTab(next);
  (next === "week" ? els.tabWeek : els.tabGroceries).focus();
});

els.groceryGroups.addEventListener("change", (event) => {
  const input = event.target.closest('input[type="checkbox"]');
  if (!input) return;
  toggleTick(input.dataset.key, input.checked);
});

els.resetTicks.addEventListener("click", () => {
  const week = ensureWeek();
  if (!week.checked.length) {
    announce("No ticks to clear.");
    return;
  }
  week.checked = [];
  saveState();
  renderGroceries();
  renderHeader();
  announce("All ticks cleared.");
});

els.toPlan.addEventListener("click", () => {
  setTab("week");
  els.tabWeek.focus();
});

els.picker.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-picker]") || event.target.closest("#picker-close")) {
    closePicker(true);
  }
});

els.pickerList.addEventListener("click", (event) => {
  const card = event.target.closest("[data-pick]");
  if (!card || !state.picker) return;
  assignRecipe(state.picker.day, state.picker.meal, card.dataset.pick);
});

els.pickerSearch.addEventListener("input", () => {
  state.pickerSearch = els.pickerSearch.value.trim();
  renderPickerList();
});

document.addEventListener("keydown", (event) => {
  if (state.picker) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePicker(true);
      return;
    }
    if (event.key === "Tab") {
      const focusable = Array.from(els.picker.querySelectorAll("button, input")).filter((element) => !element.disabled);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    return;
  }
  if (event.key === "Escape" && state.hand) {
    clearHand(true);
  }
});

document.querySelector(".tabs").setAttribute("role", "tablist");
els.tabWeek.tabIndex = 0;
els.tabGroceries.tabIndex = -1;

ensureWeek();
setTab("week");
renderAll();
