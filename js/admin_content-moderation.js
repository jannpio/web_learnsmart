const posts = [
  {
    name: "Joshua Hong",
    field: "Criminologists",
    role: "Instructor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo elit, eleifend vitae quam vel, interdum vestibulum nibh. Curabitur ultricies dictum neque, eu congue ipsum malesuada nec. Cras sagittis mauris at metus tempor, blandit maximus lectus eleifend. Praesent tellus felis, molestie eget lectus sed, tincidunt ullamcorper purus."
  },
  {
    name: "Jen Wang",
    field: "Criminal Jurisdiction",
    role: "Student",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo elit, eleifend vitae quam vel, interdum vestibulum nibh. Curabitur ultricies dictum neque, eu congue ipsum malesuada nec. Cras sagittis mauris at metus tempor, blandit maximus lectus eleifend. Praesent tellus felis, molestie eget lectus sed, tincidunt ullamcorper purus."
  }
];

const postsContainer = document.getElementById("postsContainer");

posts.forEach((post) => {
  const div = document.createElement("div");
  div.className = "post-card";
  div.innerHTML = `
    <div class="d-flex align-items-start mb-3">
      <div class="user-avatar me-3"></div>
      <div class="user-info">
        <h6>${post.name}</h6>
        <small>${post.field}</small>
        <small class="text-muted">${post.role}</small>
      </div>
    </div>
    <p class="text-muted">${post.content}</p>
    <div class="d-flex gap-2 mt-3 post-actions">
      <button class="btn btn-outline-dark btn-sm">Review Post</button>
      <button class="btn btn-outline-secondary btn-sm">Edit</button>
      <button class="btn btn-danger btn-sm">Delete</button>
    </div>
  `;
  postsContainer.appendChild(div);
});
