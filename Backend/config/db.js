
const mysql = require("mysql2/promise")
const dotenv = require("dotenv").config()


async function connectDB() {
    try {

        const connection = await mysql.createConnection({
            host : process.env.HOST,
            user : process.env.USER,
            password : process.env.PASSWORD,
            database: process.env.DATABASE
        })

        console.log("Database connected succesfully ")
        return connection;

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
