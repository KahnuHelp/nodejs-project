
var jotform = require("jotform")

jotform.options({
    debug: true,
    apiKey: "4b026bd23387cd11dc0d87f0abba0e5e"
});


module.exports = {


    getUser: async function (req, callback) {
        var data = await jotform.getUser();
        return data;

    },

    getUsage: async function (req, callback) {
        var data = await jotform.getUsage();
        return data;

    },

    getForms: async function (req, callback) {
        var data = await jotform.getForms();
        return data;

    },

    getSubusers: async function (req, callback) {
        var data = await jotform.getSubusers();
        return data;

    },

    getFolders: async function (req, callback) {
        var data = await jotform.getFolders();
        return data;

    },

    getReports: async function (req, callback) {
        var data = await jotform.getReports();
        return data;
    },

    getSettings: async function (req, callback) {
        var data = await jotform.getSettings();
        return data;

    },

    getForm: async function (req, callback) {
        var data = await jotform.getForm('30804287175961');
        return data;

    },

    getFormQuestions: async function (req, callback) {
        var data = await jotform.getFormQuestions('30804287175961');
        return data;

    },

    getFormFiles: async function (req, callback) {
        var data = await jotform.getFormFiles('30804287175961');
        return data;

    },


    getFormWebhooks: async function (req, callback) {
        var data = await jotform.getFormWebhooks('30804287175961');
        return data;

    },

    createFormWebhook: async function (req, callback) {
        var data = await jotform.createFormWebhook('30804287175961', 'http://www.a.com/ppppp.php');
        return data;

    },

    getSubmission: async function (req, callback) {
        var data = await jotform.getSubmission('30804287175961');
        return data;

    },

    getReport: async function (req, callback) {
        var data = await jotform.getReport('30804287175961');
        return data;

    },

    getFolder: async function (req, callback) {
        var data = await jotform.getFolder('511369454e0b63771d000003');
        return data;

    },

    deleteForm: async function (req, callback) {
        var data = await jotform.deleteForm('511369454e0b63771d000003');
        return data;

    },

    cloneForm: async function (req, callback) {
        var data = await jotform.cloneForm('511369454e0b63771d000003');
        return data;

    },

    deleteFormQuestion: async function (req, callback) {
        var data = await jotform.deleteFormQuestion('32403867403956', '1');
        return data;

    },


    getFormProperties: async function (req, callback) {
        var data = await jotform.getFormProperties('511369454e0b63771d000003');
        return data;

    },

    getSubmissions: async function (req, callback) {
        var data = await jotform.getSubmissions({
            offset: 10,
            limit: 10,
            filter: { "updated_at:lt": "2013" },
            orderby: "created_at",
            direction: 'ASC'
        });
        return data;
    },

    getHistory: async function (req, callback) {
        var data = await jotform.getHistory({
            action: 'formCreation',
            date: 'lastWeek',
            sortBy: 'DESC',
            startDate: '20/08/2013',
            endDate: '27/08/2013'
        });
        return data;
    },

    getFormSubmissions: async function (req, callback) {
        var data = await jotform.getFormSubmissions({
            offset: 10,
            limit: 10,
            filter: { "updated_at:lt": "2013" },
            orderby: "created_at",
            direction: 'ASC'
        });
        return data;
    },


    createFormSubmission: async function (req, callback) {
        var data = await jotform.createFormSubmission({
            "submission[1]": "answer of Question 444",
            "submission[2]": "answer of Question 555"
        });
        return data;
    },

    createForm: async function (req, callback) {
        var data = await jotform.createForm({
            "questions[0][type]": "control_head",
            "questions[0][text]": "Created form title",
            "questions[0][order]": "0",
            "questions[0][name]": "Header",
            "properties[title]": "Created by api 3",
            "properties[height]": "600"
        });
        return data;
    },


    createForms: async function (req, callback) {
        var data = await jotform.createForms({
            "questions": [{
                "type": "control_head",
                "text": "Form Title-PUT th shit",
                "order": "1",
                "name": "Header"
            }],
            "properties": {
                "title": "New Form11- put the hit",
                "height": "600"
            }
        });
        return data;
    },

    addFormQuestion: async function (req, callback) {
        var data = await addFormQuestion.createForms('32403867403956',
            {
                "question[type]": "control_head",
                "question[text]": "Created form questions shit",
                "question[order]": "1",
                "question[name]": "clickTo",
            }
        );
        return data;
    },

    addFormQuestions: async function (req, callback) {
        var data = await addFormQuestions.createForms('32403867403956',
            {
                "questions": {
                    "1": {
                        "type": "control_head",
                        "text": "Text 111",
                        "name": "Header1"
                    }, "2": {
                        "type": "control_head",
                        "text": "Text 222",
                        "name": "Header2"
                    }
                }
            }
        );
        return data;
    },


    addFormQuestions: async function (req, callback) {
        var data = await addFormQuestions.createForms('32403867403956',
            {
                "questions": {
                    "1": {
                        "type": "control_head",
                        "text": "Text 111",
                        "name": "Header1"
                    }, "2": {
                        "type": "control_head",
                        "text": "Text 222",
                        "name": "Header2"
                    }
                }
            }
        );
        return data;
    },



};
