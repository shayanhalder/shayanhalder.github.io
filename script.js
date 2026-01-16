
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
        acc.addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null; // collapse
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; // expand
            }
        });
    });

    const homeProjectListContainer = document.querySelector(".home-project-card-list");
    const projectListContainer = document.querySelector(".project-card-list");

    const projectHtml = [];

    projects.forEach((project) => {
        let html = `
        <div class="project-item">
            <h3>${project.name} </h3>
            <p>${project.description}</p>
            <div class="project-links">
            ${project.demo && `<a href="${project.demo}" target="_blank" class="project-link"> <i class="fas fa-external-link-alt"></i> Demo </a>`}
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
            </div>
        </div>
        `;
        projectHtml.push(html);
    });

    if (projectListContainer) projectListContainer.innerHTML = projectHtml.join('');
    else homeProjectListContainer.innerHTML = projectHtml.slice(0, 4).join('');

});



const projects = [
    {
        "name": "News Bias Tracker",
        "description": "Full-stack web application to showcase news bias on currently trending topics.",
        "demo": "https://shayanhalder.me/Viewpoint-News-App",
        "github": "https://github.com/shayanhalder/Viewpoint-News-App"
    },
    {
        "name": "University Course Planner",
        "description": "Full-stack app to allow students at UC Irvine to plan their course progression in a drag-drop interface with prerequisite enforcement.",
        "demo": "https://shayanhalder.me/course-eater",
        "github": "https://github.com/shayanhalder/course-eater"
    },
    {
        "name": "Ring Security Automator",
        "description": "Automate Ring home security actions using facial recognition running locally on a Raspberry Pi 5.",
        "demo": "",
        "github": "https://github.com/shayanhalder/Ring-Security-Automator"
    },
    {
        "name": "Drowsy Driver Detector",
        "description": "Multi-process application to detect driver drowsiness using an ESP32 microcontroller and a computer-vision model running on a cloud instance.",
        "demo": "",
        "github": "https://github.com/shayanhalder/Drowsy-Driver-Detector"
    },
    {
        "name": "Pickleball Club Funds Tracker",
        "description": "A Discord bot to track the funds and transactions for the Anteater Pickleball Club at UC Irvine.",
        "demo": "",
        "github": "https://github.com/shayanhalder/funds-bot"
    },
    {
        "name": "Bug Battles",
        "description": "Real-time multiplayer game to find bugs in Leetcode solutions (work in progress)",
        "demo": "",
        "github": "https://github.com/shayanhalder/BugBattles"
    },
    {
        "name": "Group Dinner Cost Calculator",
        "description": "Tool for calculating and splitting the cost at a group dinner when one person is paying the entire price.",
        "demo": "",
        "github": "https://github.com/shayanhalder/Group-Dinner-Cost-Calculator"
    }
];
