

var nodemailer = require('nodemailer');
const mailSender = require('../utils/emailUtils')

const sendemailController = {


    // sendEmail: async (req, res) => {

    //     try {

    //         var mailOptions = {
    //             from: '"yyy" <yyy@gmail.com>',
    //             to: 'satyabratapradhan523@gmail.com',
    //             subject: 'Sending Email testing',
    //             text: 'That was easy!'
    //         };

    //         await mailSender.sendEmail(mailOptions);

    //         return res.status(200).json(
    //             {
    //                 success: true,
    //                 message: `Email Sent Successfully`
    //             }
    //         );

    //     } catch (error) {

    //         return res.status(400).json(
    //             {
    //                 success: false,
    //                 message: error.message
    //             }
    //         );
    //     }
    // },

    sendEmail: async (req, res) => {

        try {

            var mailOptions = {
                from: '"yyy" <yyy@gmail.com>',
                to: 'kahnuc.swain@nettantra.net',
                subject: 'Sending Email testing',
                text: 'text',
                // html: html,
                attachments: [{
                    filename: 'minimal.pdf',
                    path: '/home/kahnucharanswain/Kanha/nodejs-project/api/controller/minimal.pdf',
                    contentType: 'application/pdf'
                }]
            };

            await mailSender.sendEmail(mailOptions);

            return res.status(200).json(
                {
                    success: true,
                    message: `Email Sent Successfully`
                }
            );

        } catch (error) {

            return res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    },

}

module.exports = sendemailController