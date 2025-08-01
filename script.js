document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            // Toggle the 'active' class for styling purposes
            this.classList.toggle("active");

            // Get the panel element that is the next sibling
            const panel = this.nextElementSibling;

            // Expand or collapse the panel
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null; // Collapse
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; // Expand
            }
        });
    });
});
