const nodeMailer = require("nodemailer");

exports.sendMail = async (option) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_PORT,
        port: process.env.SMTP_PORT,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const emailOption = {
        from: `${option.name} <${option.email}>`,
        to: ``,
        subject: ``,
        message: ``,
    }
}
