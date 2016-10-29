// callbacks example (using async library)

var baker = require('baker')
var fs = require('fs')

function makeACake(cb) {
  fs.readFile('./ingredients', (err, ingredients) => {
    if (err) return cb(err)
    baker.mix(ingredients, err => {
      if (err) return cb(err)
      baker.putInOven(err => {
        if (err) return cb(err)
        baker.takeOut((err, cake) => {
          if (err) return cb(err)
          cb(cake)
        })
      })
    })
  })
}

makeACake((err, cake) => {
  if (err) return;
  eat(cake);
})
