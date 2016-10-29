function doSomething(cb) {
  cb("IT DID NOT WORKED!!")
}

function doSomething() {
  throw "FILE IS TOO BIG!!"
}

function doSomething() {
  return Promise.reject("all your promise are belong to us")
}