// callbacks example (using async library)

var baker = require('baker')
var fs = require('fs')

function makeACake(cb) {
  fs.readFile('./ingredients', (err, ingredients) => {
    if (err) cb(err)
    baker.mix(ingredients, err => {
      if (err) cb(err)
      baker.putInOven(err => {
        if (err) cb(err)
        baker.takeOut((err, cake) => {
          if (err) cb(err)
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
