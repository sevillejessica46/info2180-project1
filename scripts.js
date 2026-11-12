
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".newsletter .message");

    function showInvalidEmail() {
        message.textContent = "Please enter a valid email address.";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showInvalidEmail();
        } else {
            message.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
        }
    });

    //
    emailInput.addEventListener("invalid", function () {
        showInvalidEmail();
    });
});

