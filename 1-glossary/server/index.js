require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')
const axios = require('axios');

const app = express();

let apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
//parse incoming request with JSON payloads. //whatis payload? ***
app.use(express.json())

/****
 * Other routes here....
 */

app.get('/glossary', function(req, res) {
  // res.send('helllooo')
  // pull all data from database
  // axios.get('/glossary')
  db.getAll() //promises
  //we I need a return statement in {}?
  .then(allData => res.send(allData))
  .catch(err => ('ERROR while server gets! ', err))

})

//post method ok. need to handle modify
app.post('/glossary', function(req, res) {
  //get api data
  // console.log(req.body)
  axios.get(apiUrl + req.body.word)
  .then((response) => {
    // console.log(response.data)
    //if response comes back, we want to grab data to match schema
    let newData = {
      word: response.data[0].word,  //word or 'word'? ***
      definition: response.data[0].meanings[0].definitions[0].definition
    }
    // console.log('newData is: ', newData)
    //save newData to db using save method which takes in data and a callback

    // db.save(newData, function(err, sucess) {
    //   if (err) {
    //     res.sendStatus(500);
    //   } else {
    //     // console.log(sucess)
    //     res.sendStatus(200);
    //   }
    // })

    // how to save then get all information back and send back?
    db.findWord(newData.word)
    .then( () =>
      db.save(newData)
        .then( () =>
          db.getAll()
            .then(allNewData => res.send(allNewData))
            .catch(err => console.log('Error while saving: ' + err)
        )
        .catch(err => console.log('Error while saving: ' + err)))
    )
    .catch((err) => console.log('The word exists already. ' + err))

    //after saving data to db, send data back to client react side.  *** below line doesn't work. why? how to also send back data
    // res.send(newData)
  })
  .catch(err => console.log('Error:', err.message))  //send res.sendStatus(500) here?
})


app.delete('/glossary', function(req, res) {
  let word = req.body.word; //*** it's called body */
  // console.log('req', req)
  // console.log('req.data ', req.data)
  //axios delete does not support a request body
  //eg:  axios.delete(url, {data: {foo: 'bar'}});
  // console.log('req is: ', req)
  // console.log('word: ', word) //
  db.delWord(word)
  .then((returnData) =>
  // res.sendStatus(200)
  // console.log(returnData)
  res.send(returnData)
  )
  // .catch(err => console.log('Error when trying to delete.', err))
  .catch(err => res.sendStatus(500))
})

app.patch('/glossary', function(req, res) {
  console.log(req)
  // console.log(req.body.word, req.body.definition)
  db.editDefinition(req.body.word, req.body.definition)
  .then(()=> res.sendStatus(200))
  .catch(err => res.sendStatus(500))
})


//get port number from env file.  but why is it process.env? *
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

