document.addEventListener("DOMContentLoaded", () => {
  const showModal = (id) => new bootstrap.Modal(document.getElementById(id)).show();

  document.getElementById("viewAnalyticsBtn").addEventListener("click", () => {
    showModal("analyticsModal");
  });

  document.getElementById("addModuleBtn").addEventListener("click", () => {
    showModal("addModuleModal");
  });

  document.getElementById("editInfoBtn").addEventListener("click", () => {
    showModal("editInfoModal");
  });

  document.getElementById("viewStudentListBtn").addEventListener("click", () => {
    showModal("studentListModal");
  });

  // Handle form submissions
  document.getElementById("addModuleForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Module added successfully!");
    bootstrap.Modal.getInstance(document.getElementById("addModuleModal")).hide();
  });

  document.getElementById("editInfoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Course information updated!");
    bootstrap.Modal.getInstance(document.getElementById("editInfoModal")).hide();
  });
});
