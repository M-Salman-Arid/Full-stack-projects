
const connectDB = require("../config/db")

const newContact = async (name, email, phone, message) => {

    const connection = await connectDB();

    const [result] = await connection.execute(
        "INSERT INTO contacts (name, email, phone, message) VALUES (?,?,?,?)",
        [name, email, phone, message]
    )

    await connection.end()

    return result
}

module.exports = {
    newContact,
}