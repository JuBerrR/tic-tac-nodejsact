const { update } = require('../../model');
const schema = require('./validator');

const UpdateGameMethod = async (parameters) => {
  const { value, error } = schema.validate(parameters);

  if (error) {
    return { error: error.details[0].message };
  }

  const { gameId, board } = value;

  try {
    const result = await update({ gameId, board });

    return result;
  } catch (err) {
    return err;
  }
};

module.exports = UpdateGameMethod;
