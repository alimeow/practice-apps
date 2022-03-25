const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  // word_id: {type: Number, unique: true},  //is it right? and auto increment?
  word: {type: String, unique: true},  //but simply saying it's uniq, app will crash when trying to search the word a second time
  // word: String,
  definition: String
})

// 3. Export the models
let gModels = mongoose.model('gModels', glossarySchema);

// 4. Import the models into any modules that need them
//wait how to save db
let save = (queryWord) => {
  // if (gModels.find({'word': queryWord}).count() === 0) {
    return gModels.create(queryWord)  //need to return promise for server to use
  // }
  // , function(err, result) {
  //   if (err) {
  //     // console.log(err)
  //     callback(err);
  //   } else {
  //     callback(null, result);
  //   }
  // })

}

//for get method in server
let getAll = () => {
  //can we return ? huh it actually works why? isn't it callback?
  //****************************** */
  return gModels.find()
  //use promise it won't work though
  // gModels.find()
  // .then(allData => res.send(allData))  //no res access here
  // .catch(err => console.log('Error', error.message))
  //************************************************************ */
}

let delWord = (/* some value that will be used to filter? */word) => {
  //delete first entry matches the filter: what is that filter like?
  gModels.findOneAndDelete()
  //if want to delete first item use {}. so we put a criteria in {}? but it's giving me error
}

//findOne function
let findWord = (wordVal) => {
  return gModels.findOne({word: wordVal})
}

module.exports.save = save; //
module.exports.getAll = getAll; //
module.exports.delWord = delWord;