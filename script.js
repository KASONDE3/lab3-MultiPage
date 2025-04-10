const themeToggleBtn = document.getElementById("themeToggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === "" || message === "") {
      alert("Please fill out all fields.");
    } else {
      const responseElement = document.getElementById("response");
      if (responseElement) {
        responseElement.innerText = `Thanks, ${name}. We'll get back to you soon!`;
      }
      // Optionally reset the form
      contactForm.reset();
    }
  });
}

const loadUsersBtn = document.getElementById("loadUsersBtn");
if (loadUsersBtn) {
  loadUsersBtn.addEventListener("click", async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  });
}

document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    if (answer) {
      answer.classList.toggle("visible");
    }
  });
});
