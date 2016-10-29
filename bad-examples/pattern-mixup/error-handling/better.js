function doSomething(cb) {
  cb(new Error("IT DID NOT WORKED!!"))
}

function doSomething() {
  throw new Error("FILE IS TOO BIG!!")
}

function doSomething() {
  return Promise.reject(new Error("all your promise are belong to us"))
}