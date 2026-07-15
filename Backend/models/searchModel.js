
const connectDB = require("../config/db")


const searchVideos = async (search) => {

    const connection = await connectDB();

    const [rows] = await connection.execute(
        "SELECT * FROM videos WHERE title LIKE ?",
        [`%${search}%`]
    )

    await connection.end();

    return rows
}

module.exports = {
    searchVideos
}