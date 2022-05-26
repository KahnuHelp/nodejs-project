


const sendSmsController = {


    sendSms: async (req, res) => {

        try {

            // const client = require('twilio')('AC86d68cdd8714377c2bc8d78c39e1fac0', '5d2fcc9ad1f4ab0e0c4e59040d18efdf');

            // console.log('first', client)

            // let response = await client.messages.create({
            //     body: 'This is message',
            //     messagingServiceSid: 'MG259cb54641b9a633e9d5322d2a6a576f',
            //     to: '+916370223969'
            // }).

            // console.log('the response', response)


            const accountSid = 'AC86d68cdd8714377c2bc8d78c39e1fac0';
            const authToken = '5d2fcc9ad1f4ab0e0c4e59040d18efdf';
            const client = require('twilio')(accountSid, authToken);

            client.messages
                .create({
                    body: 'This is message',
                    messagingServiceSid: 'MG259cb54641b9a633e9d5322d2a6a576f',
                    to: '+916370223969'
                })
                .then(message => console.log(message.sid))
                .done();


            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('Email sent: ' + info.response);
            //     }
            // });

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

module.exports = sendSmsController