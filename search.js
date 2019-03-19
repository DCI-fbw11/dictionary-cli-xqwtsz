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
  let resultsArray = data.results;
  let showSome = resultsArray[0].lexicalEntries;

  console.log("\n");

  for (let entry of showSome) {
    //let type = entry.lexicalCategory;
    let { lexicalCategory } = entry;
    let shortDef = entry.entries[0].senses[0].short_definitions[0];
    let text = entry.text;

    console.log(`${text} (${lexicalCategory})\n1. ${shortDef}\n\n`);
  }

  console.log(`Provided by ${data.metadata.provider}`);
};

module.exports = search;
