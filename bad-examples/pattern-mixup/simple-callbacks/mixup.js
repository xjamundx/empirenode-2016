function doSomething(cb) {
  getUser((err, user) => {
    getThumbnail(user.id, (err, thumbnail) => {
      cb(thumbnail)
    })
  })
}