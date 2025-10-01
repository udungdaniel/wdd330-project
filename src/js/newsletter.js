import { qs } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", () => {
    const form = qs("#newsletter-form");
    const messageEl = qs("#newsletter-message");

    if (!form || !messageEl) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = qs("#newsletter-email").value.trim();
        if (!email) {
            messageEl.textContent = "Please enter a valid email.";
            messageEl.classList.remove("hidden");
            messageEl.style.color = "red";
            return;
        }

        // show confirmation
        messageEl.textContent = "Thanks for subscribing!";
        messageEl.classList.remove("hidden");
        messageEl.style.color = "green";

        form.reset();
    });
});
