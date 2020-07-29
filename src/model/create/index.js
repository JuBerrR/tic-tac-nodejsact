const GameModel = require('../schema');

const create = async ({ gameId, board }) => {
  const game = new GameModel({ gameId, board });

  const result = await game.save();

  return result;
};

module.exports = create;
