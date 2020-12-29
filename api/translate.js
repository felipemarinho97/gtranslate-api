const { allowCors } = require("../util");
const {
  parseMultiple,
  default: googleTranslateApi,
} = require("google-translate-open-api");

const fetch = require('node-fetch');

export default allowCors(async (req, res) => {
  const { query } = req;


  try {

    const result = (await googleTranslateApi(query.text, query)).data[0];
    const response = parseMultiple(result);
    
    res.json(response);
  } catch(e) // workaround 
  {
    const text = query.text.join('')
    const result = (await fetch(`https://api-translate.azharimm.tk/translate?engine=google&text=${
      encodeURI(text)}&to=${query.to}`).then(r => r.json()))
    
    if (result.status == true) {
      res.json(result.data.targets)
    }
  }
});
