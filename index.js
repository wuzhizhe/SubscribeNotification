const Koa = require('koa');
const router = require('./router/index');
const views = require('koa-views');
const app = new Koa();
const config = require('./config');

app.use(views(__dirname + '/views', { extension: 'pug' }))

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.httpPort)