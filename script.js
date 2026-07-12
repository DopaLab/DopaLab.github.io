// Add future apps here. Every object automatically becomes a card.
const sideProjects = [
  // {
  //   name: "App name",
  //   icon: "A",
  //   description: "One clear sentence about the app.",
  //   url: "https://example.com",
  //   accent: "#2c8cff",
  // },
];

const projectList = document.querySelector("#project-list");

function renderProjects() {
  if (!sideProjects.length) {
    projectList.innerHTML = `
      <div class="empty-projects">
        <div>
          <strong>NEXT BUILD LOADING</strong>
          <span>This space is reserved for the apps still taking shape.</span>
        </div>
      </div>
    `;
    return;
  }

  projectList.innerHTML = sideProjects
    .map(
      (project) => `
        <a
          class="side-project"
          href="${project.url || "#"}"
          style="--project-accent: ${project.accent || "#2c8cff"}"
          ${project.url ? 'target="_blank" rel="noreferrer"' : ""}
        >
          <span class="side-project-icon">${project.icon || project.name.charAt(0)}</span>
          <span>
            <strong>${project.name}</strong>
            <small>${project.description || "New project details coming soon."}</small>
          </span>
        </a>
      `,
    )
    .join("");
}

const contactCard = document.querySelector("#contact-card");
const contactTrigger = document.querySelector(".contact-trigger");
const closeContact = document.querySelector(".close-contact");
const contactBack = document.querySelector("#contact-back");

function setContactOpen(isOpen) {
  contactCard.classList.toggle("is-flipped", isOpen);
  contactTrigger.setAttribute("aria-expanded", String(isOpen));
  contactBack.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    window.setTimeout(() => closeContact.focus(), 360);
  } else {
    contactTrigger.focus();
  }
}

contactTrigger.addEventListener("click", () => setContactOpen(true));
closeContact.addEventListener("click", () => setContactOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactCard.classList.contains("is-flipped")) {
    setContactOpen(false);
  }
});

document.querySelector("#year").textContent = String(new Date().getFullYear());

renderProjects();
