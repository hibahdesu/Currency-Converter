const fromCurrency = document.getElementById("from-currency-selection");
const toCurrency = document.getElementById("to-currency-selection");
const amountInput = document.getElementById("from-input");
const resultInput = document.getElementById("to-input");

// Example exchange rates from 1 unit of base currency to the others
const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110, SR: 3.75 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, JPY: 129.53, SR: 4.40 },
    GBP: { USD: 1.33, EUR: 1.14, GBP: 1, JPY: 147.3, SR: 5.0 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, JPY: 1, SR: 0.034 },
    SR:  { USD: 0.27, EUR: 0.23, GBP: 0.20, JPY: 29.4, SR: 1 }
};

amountInput.addEventListener("input", () => {
    const from = fromCurrency.value;
    // console.log(from);
    const to = toCurrency.value;
    // console.log(to);
    const amount = parseFloat(amountInput.value);
    console.log(amount);

    if (!isNaN(amount)) {
        const rate = exchangeRates[from][to];
        // console.log(rate);
        const converted = (amount * rate).toFixed(2);
        resultInput.value = converted;
    } else {
        resultInput.value = "";
    }
});

resultInput.addEventListener("input", () => {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(resultInput.value);

    if (!isNaN(amount)) {
        const rate = exchangeRates[from][to];
        const reversed = (amount / rate).toFixed(2);
        amountInput.value = reversed;
    } else {
        amountInput.value = "";
    }
});

