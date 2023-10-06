// Token price information
const tokenPrices = [
  {"currency":"BLUR","date":"2023-08-29T07:10:40.000Z","price":0.20811525423728813},
  {"currency":"bNEO","date":"2023-08-29T07:10:50.000Z","price":7.1282679},
  {"currency":"BUSD","date":"2023-08-29T07:10:40.000Z","price":0.999183113},
  {"currency":"BUSD","date":"2023-08-29T07:10:40.000Z","price":0.9998782611186441},
  {"currency":"USD","date":"2023-08-29T07:10:30.000Z","price":1},
  {"currency":"ETH","date":"2023-08-29T07:10:52.000Z","price":1645.9337373737374},
  {"currency":"GMX","date":"2023-08-29T07:10:40.000Z","price":36.345114372881355},
  {"currency":"STEVMOS","date":"2023-08-29T07:10:40.000Z","price":0.07276706779661017},
  {"currency":"LUNA","date":"2023-08-29T07:10:40.000Z","price":0.40955638983050846},
  {"currency":"RATOM","date":"2023-08-29T07:10:40.000Z","price":10.250918915254237},
  {"currency":"STRD","date":"2023-08-29T07:10:40.000Z","price":0.7386553389830508},
  {"currency":"EVMOS","date":"2023-08-29T07:10:40.000Z","price":0.06246181355932203},
  {"currency":"IBCX","date":"2023-08-29T07:10:40.000Z","price":41.26811355932203},
  {"currency":"IRIS","date":"2023-08-29T07:10:40.000Z","price":0.0177095593220339},
  {"currency":"ampLUNA","date":"2023-08-29T07:10:40.000Z","price":0.49548589830508477},
  {"currency":"KUJI","date":"2023-08-29T07:10:45.000Z","price":0.675},
  {"currency":"STOSMO","date":"2023-08-29T07:10:45.000Z","price":0.431318},
  {"currency":"USDC","date":"2023-08-29T07:10:40.000Z","price":0.989832},
  {"currency":"axlUSDC","date":"2023-08-29T07:10:40.000Z","price":0.989832},
  {"currency":"ATOM","date":"2023-08-29T07:10:50.000Z","price":7.186657333333334},
  {"currency":"STATOM","date":"2023-08-29T07:10:45.000Z","price":8.512162050847458},
  {"currency":"OSMO","date":"2023-08-29T07:10:50.000Z","price":0.3772974333333333},
  {"currency":"rSWTH","date":"2023-08-29T07:10:40.000Z","price":0.00408771},
  {"currency":"STLUNA","date":"2023-08-29T07:10:40.000Z","price":0.44232210169491526},
  {"currency":"LSI","date":"2023-08-29T07:10:50.000Z","price":67.69661525423729},
  {"currency":"OKB","date":"2023-08-29T07:10:40.000Z","price":42.97562059322034},
  {"currency":"OKT","date":"2023-08-29T07:10:40.000Z","price":13.561577966101694},
  {"currency":"SWTH","date":"2023-08-29T07:10:45.000Z","price":0.004039850455012084},
  {"currency":"USC","date":"2023-08-29T07:10:40.000Z","price":0.994},
  {"currency":"USDC","date":"2023-08-29T07:10:30.000Z","price":1},
  {"currency":"USDC","date":"2023-08-29T07:10:30.000Z","price":1},
  {"currency":"USDC","date":"2023-08-29T07:10:40.000Z","price":0.9998782611186441},
  {"currency":"WBTC","date":"2023-08-29T07:10:52.000Z","price":26002.82202020202},
  {"currency":"wstETH","date":"2023-08-29T07:10:40.000Z","price":1872.2579742372882},
  {"currency":"YieldUSD","date":"2023-08-29T07:10:40.000Z","price":1.0290847966101695},
  {"currency":"ZIL","date":"2023-08-29T07:10:50.000Z","price":0.01651813559322034}
];

// Function to get the token price by currency
function getTokenPrice(currency) {
  const token = tokenPrices.find((token) => token.currency === currency);
  return token ? token.price : null;
}

// Function to calculate the exchange rate
function calculateExchangeRate(inputAmount, outputAmount, inputCurrency, outputCurrency) {
  const inputPrice = getTokenPrice(inputCurrency);
  const outputPrice = getTokenPrice(outputCurrency);

  if (inputPrice && outputPrice) {
    return (inputAmount / inputPrice) * outputPrice;
  } else {
    return null; // Price not available for one or both tokens
  }
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form inputs
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("output-amount").value);
  const inputCurrency = document.getElementById("input-currency").value;
  const outputCurrency = document.getElementById("output-currency").value;

  // Input validation
  if (isNaN(inputAmount) || isNaN(outputAmount) || inputAmount <= 0) {
    alert("Invalid input amount.");
    return;
  }

  // Calculate exchange rate
  const exchangeRate = calculateExchangeRate(inputAmount, outputAmount, inputCurrency, outputCurrency);

  if (exchangeRate !== null) {
    alert(`Exchange Rate: 1 ${inputCurrency} = ${exchangeRate.toFixed(4)} ${outputCurrency}`);
  } else {
    alert("Exchange rate calculation failed. Price information not available for one or both tokens.");
  }
}

// Attach form submission handler
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
