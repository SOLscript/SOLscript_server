const dialogflow = require('dialogflow');
const fs = require('fs');



class Dialogflow {
    constructor (projectId, keyFile) {
        // initialization
        this.projectId = projectId;
        
        fs.readFile(keyFile, 'utf8', (err, data) => {
            if (err) throw err;
            this.keyFile = data;
        });

        let privateKey = keyFile['private_key'];
        let clientKey = keyFile['client_email'];
        let config = {
            private_key: privateKey,
            client_email:clientKey
        };

    };
    
    async detectTextIntent(queryTxt, sessionId) {
        // check queryTxt length
        if (!queryTxt || !queryTxt.length) return "No have message"      
        
        // session path
        const sessionClient = new dialogflow.SessionsClient();
        const sessionPath = await sessionClient.sessionPath(this.projectId, sessionId);

        // query request
        const query = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: queryTxt,
                    languageCode: 'ko',
                },
            },
        };

        // send request and log result
        try {
            const responses = await sessionClient.detectIntent(query);
            console.log('Detected intent');

            const result = responses[0].queryResult;
            console.log(`  Query: ${result.queryText}`);    // log query
            console.log(`  Response: ${result.fulfillmentText}`);   // log response
            // console.log(`  SessionId: ${result.outputContexts[0].name}`);;
            
            

            if (!result.intent) {
                console.log(`  No intent matched.`);
            }
            console.log(`  Intent: ${result.intent.displayName}`);

            const inputData = {
                id: "chatbot",
                response: result.fulfillmentText
            }

            return inputData

        
        } catch(err) {
            console.log('ERROR:', err);
	        response.status(500).json = {Error: err};
        }       
    }
}
module.exports = Dialogflow;
