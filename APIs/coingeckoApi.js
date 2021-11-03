const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

const coinGecko = {
	// Queries the price of a criptocurrency to the coingecko API
	criptoPrice: async () => {

		// Queries the API
		const geckoJson = await CoinGeckoClient.simple.price({
			ids: 'smooth-love-potion',
			vs_currencies: 'usd',
		});
		// Stores the data value recieved from the API
		const priceValue = Object.values(geckoJson.data)[0];
		const priceUsd = priceValue.usd;

		console.log(priceUsd) ;
		return priceUsd;

	},
};


module.exports = coinGecko;