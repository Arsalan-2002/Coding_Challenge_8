document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const registrationDetails = document.getElementById("registrationDetails");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // overhere i am retrieving form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const eventDate = document.getElementById("eventDate").value;
        const mealPreferences = Array.from(document.querySelectorAll('input[name="mealPreference"]:checked')).map(cb => cb.value);

        // overhere i am validating form fields
        if (!name || !email || !eventDate || mealPreferences.length === 0) {
            alert("Please fill out all fields and select at least one meal preference.");
            return;
        }

        // Creating a new div element here to display the registration details
        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("registration-entry");

        // Next I have added registration details to the div
        detailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Event Date:</strong> ${eventDate}</p>
            <p><strong>Meal Preferences:</strong> ${mealPreferences.join(", ")}</p>
        `;

        registrationDetails.appendChild(detailsDiv);

        form.reset();
    });
});
