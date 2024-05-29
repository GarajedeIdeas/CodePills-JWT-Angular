const router = require('express').Router();

const { checkToken } = require('../utils/middlewares');

router.use('/songs', checkToken, require('./api/songs'));
router.use('/users', require('./api/users'));

module.exports = router;