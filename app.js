
const{BotFrameworkAdapter}=require("botbuilder");
var restify = require('restify');
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});
const Adapter=new BotFrameworkAdapter({
  appId: (process.env.ENV == "PROD") ? process.env.MICROSOFT_APP_ID  : ""
  , appPassword: (process.env.ENV == "PROD") ? process.env.MICROSOFT_APP_PASSWORD : ""
})


server.post("/api/messages", (req, res) => {
    Adapter.processActivity(req, res, async (context) => {
        if (context.activity.type=="message") {
            await context.sendActivity(`hi you sens ${context.activity.text}`)
            
          }
    });
  });