const AWS = require("aws-sdk");

const config = new AWS.Config({
    region: "sa-east-1",
    secretAccessKey: process.env.SECRET_KEY,
    accessKeyId: process.env.ACCESS_KEY
});
const ses = new AWS.SES(config);

function sendResetLink(email, id) {
    const params = {
        Destination: {
            ToAddresses: [
                email,
            ]
        },
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: `To reset your password, please click on this link: http://localhost:8080/reset/${id}`
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Reset password instructions"
            }
        },
        Source: "jlrcontactos@gmail.com",
    };

    ses.sendEmail(params, (err) => {
        if (err) {
            console.log(err);
        }
    });
}


module.exports = sendResetLink;