const {user, pwd} = require('./db');
module.exports = {
  getDBConnection: function() {
    return 'mongodb://' + user + ':' + pwd + '@ds231315.mlab.com:31315/katathontest';
  }
};