

var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
    });
}

var contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = document.getElementById("fullname").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();
        var msgBox = document.getElementById("formMsg");

        if (!name || !email || !message) {
            msgBox.className = "form-message error";
            msgBox.textContent = "Please fill in all required fields.";
            return;
        }

        if (email.indexOf("@") === -1) {
            msgBox.className = "form-message error";
            msgBox.textContent = "Please enter a valid email address.";
            return;
        }

        msgBox.className = "form-message success";
        msgBox.textContent = "Thank you " + name + "! We will be in touch soon.";
        contactForm.reset();
    });
}