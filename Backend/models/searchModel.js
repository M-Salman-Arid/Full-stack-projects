
const connectDB = require("../config/userDB")

const getVideos = async () => {

    const connection = await connectDB();

    const [videos] = await connection.execute(
        "SELECT * FROM videos LIMIT 10"
    )

    await connection.end()

    return videos
    
}

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
    getVideos,
    searchVideos,
}