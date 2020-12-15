const apiKey = process.env.API_KEY
const express = require('express')
const router = express.Router()

const db = require('../db/steam')

// how the app works
// user enters their unique id
// app talks to the first api to get the library of games
// app then uses math.rand to pick a random appID (a game)
// app then grabs that appID and stores it
// then shoots off and sends another api call to 2nd link
// grabs info i want and returns it on the page

// user id
let userId = 'userId'
// app id
let appId = 'appId'

// GetOwnedGames for the user's library
let gameOwn =
  'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' +
  apiKey +
  '&steamid=' +
  userId +
  '&format=json'

// example link
// http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=FCDD6C175E80E02257338C5D676239BD&steamid=76561197960434622&format=json

// GetSchemaForGame for game data
let gameData =
  'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=' +
  apiKey +
  '&appid=' +
  appId

// example link
// http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=FCDD6C175E80E02257338C5D676239BD&appid=218620

server.get('/api/v1/library', (req, res) => {
  request.get(gameOwn).then((response) => {
    let games = response.body.response.games
    console.log(games[0])
    res.send(games)
  })
})

module.exports = router

