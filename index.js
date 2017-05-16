const Koa = require('koa');
const views = require('koa-views');
const opn = require('opn');
const serve = require('koa-static');
const app = new Koa();
const router = require('./router/index');
const config = require('./config');

app.use(views(__dirname + '/views', { extension: 'pug' }))

app.use(serve(__dirname + '/node_modules/bootstrap.native/dist'));

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.httpPort)

opn('http://127.0.0.1:' + config.httpPort)