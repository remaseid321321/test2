function addIngredient() {
  const container = document.getElementById("ingredients-container");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "ingredient-row";
  div.innerHTML = `
    <input type="text" class="form-input" placeholder="Ingredient Name" required>
    <input type="text" class="form-input" placeholder="Quantity" required>
  `;
  container.appendChild(div);
}

let stepCount = document.querySelectorAll('#instructions-container .step-row').length || 1;
function addStep() {
  const container = document.getElementById("instructions-container");
  if (!container) return;

  stepCount++;
  const div = document.createElement("div");
  div.className = "step-row";
  div.innerHTML = `
    <label>Step ${stepCount}:</label>
    <input type="text" class="form-input" placeholder="Describe next step" required>
  `;
  container.appendChild(div);
}
