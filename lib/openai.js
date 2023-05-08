const { Configuration, OpenAIApi } = require("openai");

if(!process.env.OPEN_API_KEY){
    throw new Error('Please add your OPEN_API_KEY  to .env');

}
const configuration=new Configuration({
    apiKey:process.env.OPEN_API_KEY,
});

export const openai=new OpenAIApi(configuration);