const axios = require("axios");

const search = async word => {
  const app_id = "a700dd3a";
  const app_key = "753500c9e0b2abbda8de52ec54277da4";
  const language = "en";
  const url = `https://od-api.oxforddictionaries.com:443/api/v1/entries/${language}/${word.toLowerCase()}`;
  try {
    const req = await axios({
      method: "get",
      url: url,
      headers: { app_id, app_key }
    });
    showResults(req.data);
  } catch (error) {
    console.log(error.response.statusText);
  }
};

const showResults = data => {
  let { results } = data;
  let { provider } = data.metadata;
  let { lexicalEntries } = results[0];

  console.log("Definition of the word:\n");

  for (let entry of lexicalEntries) {
    let { lexicalCategory } = entry;
    let [shortDef, ...rest] = entry.entries[0].senses[0].short_definitions;
    let { text } = entry;

    console.log(`${text} (${lexicalCategory})\n1. ${shortDef}\n\n`);
  }

  console.log(`Provided by ${provider}`);
};

module.exports = search;
