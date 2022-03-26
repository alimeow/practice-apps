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
  // if (gModels.find({'word': queryWord}).count() === 0) {  //not working will get error
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
  //returning the promise to server
  //****************************** */
  return gModels.find()
  //use promise it won't work --
  // gModels.find()
  // .then(allData => res.send(allData))  //well no res access here --
  // .catch(err => console.log('Error', error.message))
  //************************************************************ */
}

let delWord = (/* some value that will be used to filter? */wordVal) => {
  //delete first entry matches the filter: what is that filter like?
  return gModels.findOneAndDelete({word: wordVal})
}

//findOne function
let findWord = (wordVal) => {
  return gModels.findOne({word: wordVal})
}

let editDefinition = (wordVal, userDefinition) => {
  return gModels.findOneAndUpdate({word: wordVal}, {definition: userDefinition})
}

//Is there a way to simplify these exports?
module.exports.save = save; //
module.exports.getAll = getAll; //
module.exports.delWord = delWord;
module.exports.findWord = findWord;
module.exports.editDefinition = editDefinition;