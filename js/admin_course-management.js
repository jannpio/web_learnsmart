const courseRow = document.getElementById('courseRow');

const sampleCourse = () => `
  <div class="card-custom mb-3">
    <div class="card-header-custom">
      <span>Course <i class="bi bi-pencil-square"></i></span>
      <button class="btn btn-sm btn-danger" onclick="deleteCourse(this)">Delete</button>
    </div>
    <p style="font-size: 14px;">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="text-danger mb-2 fw-semibold" style="font-size: 14px;">
      <i class="bi bi-hourglass info-icon"></i> 05 APRIL 2023
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex avatar-group">
        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
        <img src="https://i.pravatar.cc/30?img=2" alt="avatar">
        <img src="https://i.pravatar.cc/30?img=3" alt="avatar">
        <div class="add-avatar">+2</div>
      </div>
      <div class="issue-text">
        <i class="bi bi-files"></i> 14 issues
      </div>
    </div>
  </div>
`;

function createCourse() {
  const col = document.createElement('div');
  col.className = 'col-md-4';
  col.innerHTML = sampleCourse();
  courseRow.appendChild(col);
}

function deleteCourse(button) {
  const card = button.closest('.col-md-4');
  card.remove();
}

// Load initial courses
for (let i = 0; i < 6; i++) {
  createCourse();
}
