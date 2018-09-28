module.exports = {
  getDBConnection() {
    return 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + process.env.DB_ADDRESS
  }
}
