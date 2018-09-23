import { user, pwd } from './db'

module.exports = {
  getDBConnection() {
    return 'mongodb://' + user + ':' + pwd + '@ds231315.mlab.com:31315/katathontest'
  }
}
