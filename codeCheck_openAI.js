require("dotenv").config();
const fs = require("fs");
const prompt = require('prompt-sync')();
const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

const codefile = prompt('Which file would you like to check for bugs? === ');
console.log('Checking file ' + codefile);

async function main() {
      const file = fs.readFileSync(codefile);
      const fileString = file.toString();

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": "You will be provided with a piece of code, and your task is to find and fix bugs in it."
        },
        {
          "role": "user",
          "content": fileString
        }
      ]
    });
  console.log(response.choices[0].message.content);

}
main();
