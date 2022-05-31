

var jotform = require('../services/jotform')

const jotformController = {


    test: async (req, res) => {

        try {

            let data = await jotform.getSettings();

            return res.status(200).json(
                {
                    success: true,
                    data: data
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