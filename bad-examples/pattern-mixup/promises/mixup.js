// promises example (using pify)

var baker = require('baker')
var fs = require('fs')
var pify = require('pify')
var getFile = pify(fs.readFile)

function makeACake() {
  return getFile('./ingredients').then(ingredents => {
    baker.mix(ingredents).then(() => {
      baker.putInOven().then(() => {
        baker.takeOut()
      })
    })
  })
}

makeACake().then(eat)
