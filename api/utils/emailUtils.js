var nodemailer = require('nodemailer');



// const path = require("path");
// const websiteDir = path.dirname(path.dirname(__dirname));
// const templatesDir = path.join(websiteDir, '/config/templates/email');

//SMTP setup
var mailSender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

module.exports = {
    sendEmail: async function (templateName, data, callback) {
        var mailOptions = {
            from: '"yyy" <yyy@gmail.com>',
            to: 'kahnuc.swain@nettantra.net',
            subject: 'Sending Email testing',
            text: 'That was easy!'
        };

        mailSender.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });


        // console.log('emailOptions', emailOptions);
        // sgMail.setApiKey(process.env.EMAIL_API_KEY);
        // sgMail
        //     .send(emailOptions)
        //     .then(() => callback())
        //     .catch(error => callback(error));
    },

    sendDynamicEmail: async function (dynamicTemplateId, data, callback) {
        const emailOptions = {
            from: data.emailSender,
            to: data.emailReceiver,
            subject: data.emailSubject,
            templateId: dynamicTemplateId,
            dynamic_template_data: data.emailBodyParams,
        };
        console.log('emailOptions', emailOptions);
        sgMail.setApiKey(process.env.EMAIL_API_KEY);
        sgMail
            .send(emailOptions)
            .then(() => callback())
            .catch(error => callback(error));
    },

    sendMemberExport: async function (templateName, data, callback) {
        const emailOptions = {
            from: data.emailSender ? data.emailSender : "noreply@doctegrity.com",
            to: data.emailReceiver,
            subject: data.emailSubject,
            html: await eta.renderFile(`${templatesDir}/${templateName}.htm`),
            attachments: [
                {
                    content: data.attachment,
                    filename: data.filename,
                    type: "application/csv",
                    disposition: "attachment"
                }

            ]
        };
        // console.log('emailOptions', emailOptions);
        sgMail.setApiKey(process.env.EMAIL_API_KEY);
        sgMail
            .send(emailOptions)
            .then(() => callback())
            .catch(error => callback(error));
    },
}