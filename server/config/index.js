module.exports = {
  getDBConnection() {
    return 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@ds231315.mlab.com:31315/katathontest'
  }
}
