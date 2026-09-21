const projects = [
    {
        id: "genetic-data-dashboard",
        title: "Genetic Data Analysis Dashboard",
        category: "Full-Stack Development / Bioinformatics",
        description:
            "Built a full-stack web application to analyze, manage, and visualize complex genetic sequencing data.",
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "AWS"
        ],

        problem:
        "Genetic sequencing produces complex data that can be difficult to review and interpret efficiently.",

        solution:
            "Developed a web-based dashboard that processes, stores, and visualizes genetic data in a more organized and understandable format.",

        contributions: [
            "Developed frontend components using React.js",
            "Built REST API endpoints with Node.js and Express",
            "Designed and maintained PostgreSQL database tables",
            "Integrated Python-based analysis workflows",
            "Used AWS services for storage and processing",
            "Migrated the application to a Linux server"
    ]
    },

    {
    id: "rare-disease-analysis",
    title: "Rare Disease Analysis Platform",
    category: "Artificial Intelligence / Bioinformatics",
    description:
        "Developed an AI-assisted workflow for analyzing patient phenotypes and prioritizing genetic variants associated with rare diseases.",
    technologies: [
        "Python",
        "Node.js",
        "Express.js",
        "LLM",
        "HPO",
        "Exomiser",
        "PostgreSQL"
    ],
    problem:
    "Rare disease diagnosis can require reviewing many genetic variants together with complex patient symptoms.",

solution:
    "Built an AI-assisted workflow that extracts patient phenotypes, maps them to HPO terms, and combines phenotype information with variant-prioritization tools.",

contributions: [
    "Extracted HPO terms from clinical notes",
    "Integrated Exomiser analysis results",
    "Processed and stored genetic variant data",
    "Built Express API routes for analysis workflows",
    "Used LLMs to assist with clinical text processing",
    "Connected phenotype and genomic information for rare disease analysis"
]
},
{
    id: "prostate-cancer-ai",
    title: "Prostate Cancer AI Treatment Recommendation System",
    category: "Artificial Intelligence / Machine Learning",
    description:
        "Developed a hybrid AI system combining LLMs, RAG, clinical rules, and machine learning to support prostate cancer treatment recommendations.",
    technologies: [
        "Python",
        "LLM",
        "RAG",
        "Machine Learning",
        "NLP",
        "TCGA"
    ],
    problem:
    "Prostate cancer treatment decisions require combining clinical risk factors, medical guidelines, and molecular information.",

solution:
    "Designed a hybrid AI framework that extracts clinical information, performs deterministic risk classification, retrieves guideline evidence, and produces evidence-supported treatment options.",

contributions: [
    "Built an AI-based clinical information extraction workflow",
    "Implemented deterministic prostate cancer risk classification",
    "Created a RAG pipeline using clinical guidelines",
    "Used embeddings for semantic retrieval",
    "Evaluated the system using synthetic and TCGA patient data",
    "Integrated RNA expression, mutation, and copy-number data"
]
},
{
    id: "healthcare-data-analytics",
    title: "Healthcare Data Analytics & Machine Learning",
    category: "Data Science / Machine Learning",
    description:
        "Analyzed large healthcare datasets using Python, R, SQL, machine learning, and NLP to identify patterns and generate data-driven insights.",
    technologies: [
        "Python",
        "R",
        "SQL",
        "Pandas",
        "Scikit-learn",
        "NLP"
    ],
    problem:
    "Large healthcare datasets require extensive cleaning, validation, and analysis before meaningful patterns can be identified.",

solution:
    "Developed data analysis and machine learning workflows to clean healthcare data, identify patterns, and improve predictive performance.",

contributions: [
    "Cleaned and validated large healthcare datasets",
    "Performed exploratory data analysis",
    "Developed Scikit-learn machine learning models",
    "Improved prediction accuracy by approximately 15%",
    "Optimized data processing workflows",
    "Used NLP and statistical analysis to generate healthcare insights"
]
},
{
    id: "cnv-visualization",
    title: "Genomic CNV Visualization Tool",
    category: "Data Visualization / Bioinformatics",
    description:
        "Developed Python-based visualization tools for analyzing and displaying copy-number variations across chromosomes.",
    technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Genomic Data Analysis"
    ],
    problem:
    "Copy-number variation data contains large numbers of genomic measurements that are difficult to interpret directly from raw files.",

solution:
    "Developed Python-based visualization tools that transform genomic copy-number data into chromosome-level plots and digital karyograms.",

contributions: [
    "Processed genomic copy-number data using Python",
    "Developed chromosome-level CNV visualizations",
    "Created digital karyogram representations",
    "Analyzed genomic gain and loss patterns",
    "Improved visual interpretation of complex genomic data"
]
},
{
    id: "pgx-report-generator",
    title: "Pharmacogenomics Report Generator",
    category: "Healthcare Software / Full-Stack Development",
    description:
        "Built a web application that generates pharmacogenomics reports to support personalized medication decisions.",
    technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Jinja2",
        "WeasyPrint",
        "Linux",
        "Apptainer"
    ],
    problem:
    "The laboratory relied on an external service to generate pharmacogenomics reports, increasing cost and reducing control over the reporting workflow.",

solution:
    "Developed an internal web application that processes pharmacogenomics information and automatically generates professional patient reports.",

contributions: [
    "Developed the backend using Python and Flask",
    "Created report templates using HTML and Jinja2",
    "Generated PDF reports with WeasyPrint",
    "Integrated PostgreSQL for patient and result data",
    "Containerized the application using Apptainer",
    "Deployed the application on a Linux server"
]
}

];


module.exports = projects;