
const connectDB = require("../config/userDB");

const newImage = async (imageName, imageData, imageType, imageSize) => {

    const connection = await connectDB();

    const [result] = await connection.execute(
        "INSERT INTO images (image_name, image_data, image_type, image_size) VALUES (?,?,?,?)",
        [imageName, imageData, imageType, imageSize]
    );

    await connection.end();

    return result;
}

module.exports = {
    newImage,
};