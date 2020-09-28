const { allowCors } = require("../util");
const googleTranslateApi = require("google-translate-open-api").default;

export default allowCors((req, res) => {
  const { query } = req;

  res.json(googleTranslateApi(query.text, query));
});
