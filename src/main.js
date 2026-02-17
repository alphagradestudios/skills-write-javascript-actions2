const getJoke = require("./joke");

async function run() {
  const { setOutput } = await import("@actions/core");
  const joke = await getJoke();
  console.log(joke);
  setOutput("joke", joke);
}

run();