function doSomething(cb) {
  getUser((err, user) => {
    if (err) return cb(err)
    getThumbnail(user.id, (err, thumbnail) => {
      if (err) return cb(err)
      cb(null, thumbnail)
    })
  })
}