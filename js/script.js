document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("interestForm");

    form.addEventListener("submit", () => {

        const status = document.getElementById("status");

        status.textContent =
            "✅ Thank you for your enquiry. We will contact you soon.";

    });

});