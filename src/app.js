const express = require('express')      //Framework to use CRUD operations easier
const app= express()
const port= 3000                        //default port for express
const newsAPI= require('./tools/newsAPI')

//template engine html+dynamic features
//npm i hbs
//configure the template type
app.set('view engine','hbs')
let country= 'eg'
//https://newsapi.org/v2/top-headlines?country=eg&apiKey=0038159101954b39a7f2bf2b5004c069
//http://localhost:3000/
app.get('/',(req,res)=>{
    newsAPI(country,(error,data)=>{
     
      if(error){
        return res.send({error})
      }
      res.send({
        articles:data
      })

    })
  })


/*app.get('/',(req,res)=>{
    res.render('index',{
        title:"This is titleeee"
    })
})
*/

//always at the end of the project
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })