const { UpdateGameMethod } = require('../../../../methods');

const update = async (req, res) => {
  const result = await UpdateGameMethod(req.body);

  // fix error messages and status codes

  if (!result || result.error) {
    res.status(400).json(result);
  } else res.status(200).json({ result });
};

module.exports = update;
