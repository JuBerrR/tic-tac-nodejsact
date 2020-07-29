# tic-tac-nodejsact

simple endpoints with connection to MongoDB for tic-tac-react(https://github.com/JuBerrR/tic-tac-react)

### 1. `npm i`
### 2. `npm start`

To run tests 
### `npm run test`

## Endpoints

#### GET '/game:gameId'
gameId must be valid GUID, returns board array and gameId 

#### POST '/game'
body must look like this 
{ 
  "board": [],
  "gameId: '00000000-0000-0000-0000-000000000000'
}
