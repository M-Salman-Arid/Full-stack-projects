
const connectDB = require("../config/db")

const createUser = async (username, email, password, role) => {
    const connection = await connectDB()

    const [result] = await connection.execute(
        "INSERT INTO users (username, email, password, role) VALUES (?,?,?,?)",
        [username, email, password, role]
    )

    await connection.end()

    return result
}

const loginUser = async (email, role) => {
    const connection = await connectDB()

    const [rows] = await connection.execute("SELECT * FROM users WHERE email = ? AND role = ?",
        [email, role]
    )

    await connection.end()

    return rows[0]
}

const UpdateUserPassword = async (username, email, password) => {
    const connection = await connectDB()

    const [result] = await connection.execute("UPDATE users SET password = ? WHERE username = ? AND email = ?",
        [password, username, email]
    )

    await connection.end()

    return result
}

const deleteAccount = async (id) => {
    const connection = await connectDB()

    const [result] = await connection.execute("DELETE FROM users WHERE id = ?", [id])

    await connection.end()

    return result
}

const saveVerificationToken = async (userId, token) => {

    const connection = await connectDB();

    await connection.execute(
        `UPDATE users
         SET verification_token = ?
         WHERE id = ?`,
        [token, userId]
    );

    await connection.end();

};

const getUserByVerificationToken = async (token) => {

    const connection = await connectDB();

    const [rows] = await connection.execute(
        `SELECT *
         FROM users
         WHERE verification_token = ?`,
        [token]
    );

    await connection.end();

    return rows[0];

};

const verifyUser = async (token) => {

    const connection = await connectDB();

    const [result] = await connection.execute(
        `UPDATE users
         SET is_verified = TRUE,
             verification_token = NULL
         WHERE verification_token = ?`,
        [token]
    );

    await connection.end();

    return result;

};

module.exports = {
    createUser,
    loginUser,
    UpdateUserPassword,
    deleteAccount,
    saveVerificationToken,
    getUserByVerificationToken,
    verifyUser
}