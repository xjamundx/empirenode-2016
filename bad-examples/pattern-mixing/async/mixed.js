// mixing patterns (promises & callbacks)

var baker = require('baker')
var fs = require('fs')

function makeACake(cb) {
  fs.readFile('./ingredients', (err, ingredients) => {
    if (err) {
      return cb(err)
    }
    baker.mix(ingredents)
      .then(() => baker.putInOven())
      .then(() => baker.takeOut())
      .then(() => cb())
      .catch(err => cb(err))
})
              
makeACake((err, cake) => {
  if (err) return;
  eat(cake)
})

