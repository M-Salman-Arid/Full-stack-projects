
const connectDB = require("../config/userDB")

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

const saveOTP = async (userId, otp, expiry) => {

    const connection = await connectDB();

    await connection.execute(
        `UPDATE users
         SET email_otp = ?, otp_expires_at = ?
         WHERE id = ?`,
        [otp, expiry , userId]
    );

    await connection.end();

};

const getUserByEmail = async (email) => {

    const connection = await connectDB();

    const [rows] = await connection.execute(
        `SELECT *
         FROM users
         WHERE email = ?`,
        [email]
    );

    await connection.end();

    return rows[0];

};

const verifyUser = async (id) => {

    const connection = await connectDB();

    const [result] = await connection.execute(
        `UPDATE users
         SET is_verified = TRUE,
         email_otp = null,
         otp_expires_at = null
         WHERE id = ?`,
        [id]
    );

    await connection.end();

    return result;

};

module.exports = {
    createUser,
    loginUser,
    UpdateUserPassword,
    deleteAccount,
    saveOTP,
    getUserByEmail,
    verifyUser
}