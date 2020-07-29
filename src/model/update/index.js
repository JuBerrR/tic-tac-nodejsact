const GameModel = require('../schema');

const update = async ({ gameId, board }) => {
  const result = await GameModel.updateOne({ gameId }, { $addToSet: { board } });

  if (result.n === 1) {
    return 'updated';
  }

  return {};
};

module.exports = update;
