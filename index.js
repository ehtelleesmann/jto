const axios = require('axios');

async function getSsvPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ssv&vs_currencies=usd');
    const ssvPrice = response.data.ssv.usd;
    return ssvPrice;
  } catch (error) {
    console.error('Error retrieving SSV price:', error);
    throw error;
  }
}

module.exports = {
  getSsvPrice
};
