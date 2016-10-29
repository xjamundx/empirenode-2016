// promises example (using pify)

var baker = require('baker')
var fs = require('fs')
var pify = require('pify')
var getFile = pify(fs.readFile)

function makeACake() {
  return getFile('./ingredients').then(ingredents => {
    return baker.mix(ingredents).then(() => {
      return baker.putInOven().then(() => {
        return baker.takeOut()
      })
    })
  })
}

makeACake().then(eat)
