require("dotenv").config();
const OpenAI = require("openai");
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

async function main() {
  const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

  console.log(image.data);
}
main();
