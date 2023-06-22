import axios from 'axios'
require("dotenv").config()

function searchForPlayer(name){
    // Set up the correct API call
    let APICallString = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-account/"+ name + "?api_key=" +  process.env.API_KEY;
    //Handle the API call
    axios.get(APICallString).then(function (response) {
      //Success
      setPlayerData(response.data);
    }).catch(function (error) {
      // Error
      console.log(response);
    });
  }