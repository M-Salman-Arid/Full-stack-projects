
const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const morgan = require("morgan")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const imageRoutes = require("./routes/imageRouter")
const contactRoutes = require("./routes/contactRouter")

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(userRoutes)
app.use(imageRoutes)
app.use(contactRoutes)
app.use(express.static("public"))
app.use(morgan("dev"))



connectDB()

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=> {
    console.log(`Server is running on the port ${PORT}`)
})

