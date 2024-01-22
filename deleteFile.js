require("dotenv").config();
const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

async function main() {
  const file = await openai.files.del("file-JTknqz1Wzqzuc05knP6X49RU");

  console.log(file);
}

main();
