// Logs on console the bot is ready

const coinGecko = require('../APIs/coingeckoApi');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		async	function slpPrice() {
			const price = await coinGecko.criptoPrice();
			console.log(price);
			client.user.setActivity(`$${price}`);
		}
		slpPrice();
		setInterval(() =>{
			slpPrice();
		}, 600000);
	},
};