const OpenAI = require('openai');

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPEN_ROUTER_API,
});
async function main() {
    const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1-distill-llama-70b:free",
        messages: [
            {
                role: 'user',
                content: 'What is the meaning of life?',
            },
        ],
    });
    console.log(completion.choices[0].message);
}
main();