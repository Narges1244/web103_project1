const projectDetails = document.getElementById("project-details");

const pathParts = window.location.pathname.split("/");
const projectId = pathParts[2];

fetch(`/api/projects/${projectId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Project not found");
        }

        return response.json();
    })
    .then(project => {

        const title = document.createElement("h2");
        title.textContent = project.title;
        projectDetails.appendChild(title);

        const category = document.createElement("p");
        category.textContent = `Category: ${project.category}`;
        projectDetails.appendChild(category);

        const description = document.createElement("p");
        description.textContent = project.description;
        projectDetails.appendChild(description);

        const technologiesTitle = document.createElement("h3");
        technologiesTitle.textContent = "Technologies";
        projectDetails.appendChild(technologiesTitle);

        const technologiesList = document.createElement("ul");

        project.technologies.forEach(technology => {
            const item = document.createElement("li");
            item.textContent = technology;
            technologiesList.appendChild(item);
        });

        projectDetails.appendChild(technologiesList);

        const problemTitle = document.createElement("h3");
        problemTitle.textContent = "Problem";

        const problem = document.createElement("p");
        problem.textContent = project.problem;

        projectDetails.appendChild(problemTitle);
        projectDetails.appendChild(problem);

        const solutionTitle = document.createElement("h3");
        solutionTitle.textContent = "Solution";

        const solution = document.createElement("p");
        solution.textContent = project.solution;

        projectDetails.appendChild(solutionTitle);
        projectDetails.appendChild(solution);

        const contributionsTitle = document.createElement("h3");
        contributionsTitle.textContent = "Key Contributions";

        projectDetails.appendChild(contributionsTitle);

        const contributionsList = document.createElement("ul");

        project.contributions.forEach(contribution => {
            const item = document.createElement("li");
            item.textContent = contribution;
            contributionsList.appendChild(item);
        });

        projectDetails.appendChild(contributionsList);
    })
    .catch(error => {
        projectDetails.innerHTML = `
            <h2>Project Not Found</h2>
            <p>The project you requested does not exist.</p>
            <a href="/">Back to Projects</a>
        `;
    });