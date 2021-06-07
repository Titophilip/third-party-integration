const nodeMailer = require("nodemailer");

exports.sendMail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SM,
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
        user: "username",
        pass: "password"
    })
}