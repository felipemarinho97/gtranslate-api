const { allowCors } = require("../util");
const {
  parseMultiple,
  default: googleTranslateApi,
} = require("google-translate-open-api");

export default allowCors(async (req, res) => {
  const { query } = req;
  const result = (await googleTranslateApi(query.text, query)).data[0];
  const response = parseMultiple(result);

  res.json(response);
});
