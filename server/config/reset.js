const pool = require("./database");
const projectData = require("../data/projects");

const createProjectsTable = async() => {
    
    const createTableQuery = `
        DROP TABLE IF EXISTS projects;

        CREATE TABLE IF NOT EXISTS projects (
            id SERIAL PRIMARY KEY,
            slug VARCHAR(255) UNIQUE NOT NULL,
            title VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            technologies TEXT[] NOT NULL,
            problem TEXT,
            solution TEXT,
            contributions TEXT[]
        );
    `;
try {
    await pool.query(createTableQuery);

    console.log("🎉 projects table created successfully");
}
catch (error) {
    console.error("⚠️ error creating projects table", error);
}

};

const seedProjectsTable = async () => {
    projectData.forEach((project) => {

        const insertQuery = {
            text: `
                INSERT INTO projects
                (slug, title, category, description, technologies, problem, solution, contributions)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `
        };
    
        const values = [
            project.id,
            project.title,
            project.category,
            project.description,
            project.technologies,
            project.problem,
            project.solution,
            project.contributions
        ];
    
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error("⚠️ error inserting project", err);
                return;
            }
    
            console.log(`✅ ${project.title} added successfully`);
        });
    });

};
seedProjectsTable();
