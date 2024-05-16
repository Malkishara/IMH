function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const contactSection = document.getElementById("contact");
  
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  
    // Scroll to the contact section if the menu is being closed
    if (!menu.classList.contains("open")) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  