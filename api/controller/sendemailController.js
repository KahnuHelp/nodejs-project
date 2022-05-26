

var nodemailer = require('nodemailer');


const sendemailController = {


    sendEmail: async (req, res) => {

        try {


            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                service: 'gmail',
                auth: {
                    user: 'kahnuc.swain@nettantra.net',
                    pass: 'xnktthmmjahwfdcj'
                }
            });

            var mailOptions = {
                from: '"yyy" <yyy@gmail.com>',
                to: 'kahnuc.swain@nettantra.net',
                subject: 'Sending Email testing',
                text: 'That was easy!'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

            // let data = await jotform.getSettings();

            return res.status(200).json(
                {
                    success: true,
                    data: 'data'
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