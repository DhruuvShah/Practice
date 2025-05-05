const users = [
    {
      name: "Ananya Patel",
      job: "Frontend Developer",
      avatar: "Ananya.avif",
    },
    {
      name: "Ravi Shah",
      job: "UI/UX Designer",
      avatar: "Ravi.jpg",
    },
    {
      name: "Pranav Agrawal",
      job: "Backend Engineer",
      avatar: "Pranav.jpg",
    },
    {
      name: "Swathi Adani",
      job: "Data Scientist",
      avatar: "Swathi.jpg",
    },
    {
      name: "Raj Sharma",
      job: "Project Manager",
      avatar: "Raj.avif",
    },
    {
        name: "Anonymous",
        job: "Entrepreneur",
        avatar: "Anonymus.webp",
      },
  ];
  const searchInput = document.getElementById("search");
  const userList = document.getElementById("user-list");
  function renderUsers(usersArray) {
    userList.innerHTML = "";
    if (usersArray.length === 0) {
      userList.innerHTML =
        '<p class="text-center text-gray-500">No matching users found.</p>';
      return;
    }
    usersArray.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "bg-white shadow-md rounded-xl p-4 flex items-center gap-4";
      card.innerHTML = ` <img src="${user.avatar}" alt="${user.name}" class="w-16 h-16 rounded-full object-cover" /> <div> <h3 class="text-lg font-semibold">${user.name}</h3> <p class="text-gray-500">${user.job}</p> </div> `;
      userList.appendChild(card);
    });
  }
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.job.toLowerCase().includes(query)
    );
    renderUsers(filtered);
  });
  window.addEventListener("DOMContentLoaded", () => {
    renderUsers(users);
  });
