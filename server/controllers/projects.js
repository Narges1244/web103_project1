const pool = require("../config/database");

const getProjects = async (req, res) => {
    try {
        const results = await pool.query(
            "SELECT * FROM projects ORDER BY id"
        );

        res.status(200).json(results.rows);
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const getProjectBySlug = async(req,res)=> {
    try{
        const{slug} = req.params;
        const results = await pool.query(
            "SELECT * FROM PROJECTS WHERE SLUG = $1",
            [slug]
        );
        if (results.rows.length === 0) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        res.status(200).json(results.rows[0]);
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};  
    


module.exports = {
    getProjects,
    getProjectBySlug
};