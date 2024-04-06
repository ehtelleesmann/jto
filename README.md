```
#  Price Checker

[![npm version](https://img.shields.io/npm/v/-price-checker.svg?style=flat-square)](https://www.npmjs.com/package/-price-checker)

A simple package to retrieve the current price of Bitcoin ().

## Installation

Install the package using npm:

```
npm install -price-checker
```

## Usage

To use the package, you need to import it:

```javascript
const ethPriceChecker = require('-price-checker');
```

Then, you can call the `getETHPrice()` function to retrieve the current price of Bitcoin:

```javascript
ethPriceChecker.getEthPrice()
  .then(price => {
    console.log(`The current price of Bitcoin is $${price}`);
  })
  .catch(error => {
    console.error('Error fetching  price:', error);
  });
```

## API Documentation

The package provides the following function:

### `getEthPrice()`

This function fetches the current price of Bitcoin from a reliable data source. It returns a Promise that resolves to the current price in USD.

## Examples

Here's an example of how to use the `getEthPrice()` function:

```javascript
const ethPriceChecker = require('-price-checker');

ethPriceChecker.getEthPrice()
  .then(price => {
    console.log(`The current price of  is $${price}`);
  })
  .catch(error => {
    console.error('Error fetching  price:', error);
  });
```

## Contributing

If you wish to contribute to this package, you can follow the guidelines in CONTRIBUTING.md file.

## License

This package is licensed under the MIT License.
```