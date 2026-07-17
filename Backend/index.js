
const express = require("express")
const dotenv = require("dotenv").config()
const connectDB = require("./config/userDB")
const morgan = require("morgan")
const cors = require("cors")
const userRoutes = require("./routes/userRoutes")
const contactRoutes = require("./routes/contactRouter")
const imageRoutes = require("./routes/imageRouter")
const searchRoute = require("./routes/searchRoute")
const path = require("path")


const app = express()

app.use(morgan("dev"))
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
app.use("/videos", searchRoute)
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


app.get("/", (req, res) => {
    res.send("server is running")
})
connectDB()

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`)
})

