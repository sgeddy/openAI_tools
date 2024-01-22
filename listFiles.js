require("dotenv").config();
const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

async function main() {
  const list = await openai.files.list({
	purpose: "assistants"
  });
  for await (const file of list) {
    console.log(file);
  }

}

main();
