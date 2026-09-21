const projectContainer = document.getElementById("projects-container");
console.log(projectContainer);

fetch("/api/projects")
    .then((response) => response.json())
    .then(data => {
        data.forEach(project => {

     
    
        const article = document.createElement("article");
        console.log(project);
        const title = document.createElement("h2");
        title.textContent = project.title;
        article.appendChild(title);
        projectContainer.appendChild(article);

        const category = document.createElement("p");
        category.textContent = `Category: ${project.category}`;
        article.appendChild(category);

        const description = document.createElement("p");
        description.textContent = `Description: ${project.description}`;
        article.appendChild(description);

        const technologies = document.createElement("p");
        technologies.textContent = `Technologies: ${project.technologies.join(", ")}`;
        article.appendChild(technologies);

        const link = document.createElement("a");
        link.textContent = "Explore Project";
        link.href = `/projects/${project.id}`; // Replace with the actual project link if available
        article.appendChild(link);
     });





    });