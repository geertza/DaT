const axios = require("axios")
require('dotenv').config()

const apiKey= process.env.BINGAPI
// const url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${data}&safeSearch=Strict&imageType=Transparent`;
async function search(image,option) {
  console.log('ing,opt',image,option)
    if (option === 'bg'){
      results = await  axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=background${image}&safeSearch=off`, {
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey ,
          }
        
        })
    }
    else
    {
      results = await axios.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${image}`, {
        headers: {
          "Ocp-Apim-Subscription-Key": apiKey,
          "safeSearch":'off',
          "isFamilyFriendly" : false,
          },
          params:{
            imageType: 'transparent',
            safeSearch: 'off',
            count:150
          }

      })
    }
     let final=[]
      function sort(results){
        var i;
      for (i = 0; i < results.length; i++) {
        final.push(results[i].contentUrl)
      
     }}
      sort(results.data.value)
      return (final)
}
module.exports = search;
// data.value[1].contentUrl