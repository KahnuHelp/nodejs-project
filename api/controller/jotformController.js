

var jotform = require('../services/jotform')

const jotformController = {


    test: async (req, res) => {

        try {
         
            let data = await jotform.getUser();

            // console.log('first' , data)
                // .then(function (r) {
                //     /* successful response after request */
                //     console.log('result', r)
                // })
                // .fail(function (e) {
                //     /* handle error */
                //     console.log('error' , e)
                // });

            return res.status(200).json(
                    {
                        success: true,
                        // data: slots
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

module.exports = jotformController