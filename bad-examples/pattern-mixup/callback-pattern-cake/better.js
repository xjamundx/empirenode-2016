// callbacks example (using async library)

var baker = require('baker')
var fs = require('fs')
var async = require('async')

function makeACake(cb) {
  async.waterfall([
    (cb) => fs.readFile('./ingredients', cb),
    (ingredients, cb) => baker.mix(ingredients, cb),
    (cb) => baker.putInOven(cb),
    (cb) => baker.takeOut(cb)
  ], cb)
}

makeACake((err, cake) => {
  if (err) return;
  eat(cake);
})
