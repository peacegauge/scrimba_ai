const OpenAI = require('openai');

/**
 * Challenge:
 * 1. Ask OpenAI to explain something complicated 
 *    to you. For example Quantum Computing.
 * 
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of 
 *   the generated content, for example is this for 
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 * **/ 

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.OPEN_ROUTER_API,
});

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert teacher able to explain any topic using 5th grade level vocabulary.'
    },
    {role: "user",
        content: "What is a quantum computer"
    }
]

async function main() {
    const completion = await openai.chat.completions.create({
        model: "deepseek/deepseek-r1-distill-llama-70b:free",
        messages: messages
    });
    console.log(completion.choices[0].message.content);
}
main();

