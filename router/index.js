const router = require('koa-router')();
const services = require('../services/index');

router
	.get('/', services.start)

module.exports = router;