// Function to fetch and load the JSON file
async function loadTokenPrices() {
  try {
    const response = await fetch('currency.json'); // Fetch data from currency.json
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const tokenPrices = await response.json();
    return tokenPrices;
  } catch (error) {
    console.error('Error loading token prices:', error);
    return null;
  }
}
// Call the function to load token prices
loadTokenPrices().then((tokenPrices) => {
  if (tokenPrices) {
    // Function to get the token price by currency
    function getTokenPrice(currency) {
      const token = tokenPrices.find((token) => token.currency === currency);
      return token ? token.price : null;
    }

    // Function to calculate the exchange rate
    // Function to calculate the exchange rate
    function calculateExchangeRate(inputAmount, inputCurrency, outputCurrency) {
      const inputPrice = getTokenPrice(inputCurrency);
      const outputPrice = getTokenPrice(outputCurrency);

      if (inputPrice !== null && outputPrice !== null) {
          return (inputAmount * inputPrice) / outputPrice;
      } else {
          return null; // Price not available for one or both tokens
      }
    }

    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();

      // Get form inputs
      const inputAmount = parseFloat(document.getElementById("input-amount").value);
      const inputCurrency = document.getElementById("input-currency").value;
      const outputCurrency = document.getElementById("output-currency").value;

      // Input validation
      if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Invalid input amount.");
        return;
      }

      // Calculate exchange rate
      const exchangeRate = calculateExchangeRate(inputAmount, inputCurrency, outputCurrency);

      if (exchangeRate !== null) {
        alert(`Exchange Rate: 1 ${inputCurrency} = ${exchangeRate.toFixed(4)} ${outputCurrency}`);
      } else {
        alert("Exchange rate calculation failed. Price information not available for one or both tokens.");
      }
    }

    // Attach form submission handler
    const form = document.getElementById("swap-form");
    document.getElementById("confirm-button").addEventListener("click", handleSubmit);
  }
});
