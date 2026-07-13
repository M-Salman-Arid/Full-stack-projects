
const contactModel = require("../models/contactModel")

const newContact = async (req, res) => {
    
    try {

        const {name , email, phone, message,} = req.body;

        if(!name) {
            return res.status(400).json({
                message : "Name is required"
            })
        } else if(!email) {
            return res.status(400).json({
                message : "Email is required"
            })
        } else if(!phone) {
            return res.status(400).json({
                message : "Phone number is required"
            })
        } else if(!message) {
            return res.status(400).json({
                message : "Message is required"
            })
        }

        const result = await contactModel.newContact(name, email, phone, message)

        res.status(200).json({
            message : "Form Submitted Successfully. ✔",
            result
        })


        
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = {
    newContact,
}