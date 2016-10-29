// callbacks example (using async library)

var baker = require('baker')
var fs = require('fs')

function makeACake(cb) {
  fs.readFile('./ingredients', (err, ingredients) => {
    baker.mix(ingredients, err => {
      baker.putInOven(err => {
        baker.takeOut((err, cake) => {
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
