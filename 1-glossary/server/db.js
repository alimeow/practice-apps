const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
let glossarySchema = mongoose.Schema({
  // word_id: {type: Number, unique: true},  //is it right? and auto increment?
  word: String,
  definition: String
})

// 3. Export the models
let gModels = mongoose.model('gModels', glossarySchema);

// 4. Import the models into any modules that need them
//wait how to save db
let save = (returnData, callback) => {
  gModels.create(returnData, function(err, result) {
    if (err) {
      console.log(err)
      callback(err);
    } else {
      // returnData.save()  //check docs to see how to save data
      callback(null, result);
    }
  })
}

//for get method in server
let getAll = () => {
  //can we return ? huh it actually works why? isn't it callback?
  //****************************** */
  return gModels.find()
  //use promise it won't work though
  // gModels.find()
  // .then(allData => res.send(allData))
  // .catch(err => console.log('Error', error.message))
  //************************************************************ */
}

let delOne = (/* some value that will be used to filter? */word, callback) => {
  //delete first entry matches the filter: what is that filter like?
  gModels.deleteOne( word, (err, result) => {
    if (err) {
      callback(err, null)
    } else {
      console.log(result);
      callback(null, result)
    }
  })
  //if want to delete first item use {}. so we put a criteria in {}? but it's giving me error
}



module.exports.save = save; //
module.exports.getAll = getAll; //
module.exports.delOne = delOne;