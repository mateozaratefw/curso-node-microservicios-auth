const auth = require('../../../auth')

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    switch (action) {
      case 'udpate':
        const owner = req.body.id
        auth.check.own(req, owner)
        break;
      
      default:
        next();
    }
  }
  return middleware
}