function addModule() {
  const input = document.getElementById("newModuleInput");
  const value = input.value.trim();
  if (value) {
    const list = document.getElementById("moduleList");
    const newItem = document.createElement("li");
    newItem.textContent = value;
    list.appendChild(newItem);
    input.value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('addModuleModal'));
    modal.hide();
  }
}

function editModules() {
  alert("Editing modules is currently in development.");
}

function acceptSuggestion() {
  alert("Module 'Spaced Repetition' has been added to the path.");
}

function dismissSuggestion() {
  alert("Suggestion dismissed.");
}

function assignPath() {
  const all = document.getElementById("allStudents").checked;
  const select = document.getElementById("selectStudents").checked;
  if (all) {
    alert("Path assigned to all students.");
  } else if (select) {
    alert("Select specific students to assign.");
  } else {
    alert("Please select an assignment option.");
  }
}
