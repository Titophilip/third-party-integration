exports.eMessage = async (name, email, subject, message) => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact us Response</title>
</head>
<body>
    <h2>Get in touch with me</h2>

    <div>
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
    </div>
</body>
</html>`

return html
}