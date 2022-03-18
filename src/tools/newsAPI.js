const request= require('request')

const newsAPI=(country,callback)=>{

    const url="https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=0038159101954b39a7f2bf2b5004c069"
    request({url,json:true},(error,res)=>{
        //low level error from the server
        if(error){
           callback('Unable to connect',undefined)
        }
        else{
            callback( undefined,res.body.articles)
        }
    })}
    



   module.exports= newsAPI


