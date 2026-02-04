const form = document.getElementById("postForm");
const successMessage = document.getElementById("successMessage");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  form.style.display = "none"; 
  successMessage.style.display = "block"; 
});

fileInput.addEventListener("change", function() {
  preview.innerHTML = "";
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
    }
    reader.readAsDataURL(file);
  }
});
//const studentNumber = localStorage.getItem("studentNumber");
      console.log("Submitting post for student number new:", studentNumber);

