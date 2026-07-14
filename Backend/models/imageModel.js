
const connectDB = require("../config/db");

const newImage = async (imageName, imagePath, imageType, imageSize) => {

    const connection = await connectDB();

    const [result] = await connection.execute(
        "INSERT INTO images (imageName, imagePath, imageType, imageSize) VALUES (?,?,?,?)",
        [imageName, imagePath, imageType, imageSize]
    );

    await connection.end();

    return result;
}

module.exports = {
    newImage,
};