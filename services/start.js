module.exports = async function(ctx, next) {
await ctx.render('index.pug', {
	name: 'my first pug template!'
});
}