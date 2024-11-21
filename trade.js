// Get inputs and elements
const pre_high = document.getElementById("pre_high");
const pre_low = document.getElementById("pre_low");
const tdy_high = document.getElementById("tdy_high");
const tdy_low = document.getElementById("tdy_low");

const niftyFtrs = document.getElementById("niftyFtrs");
const BankniftyFtrs = document.getElementById("BankniftyFtrs");

// Variables to store results
let buyEntry, buyTarget, buyStoploss1, buyStoploss2;
let sellEntry, sellTarget, sellStoploss1, sellStoploss2;

function calc() {
    // Parse the input values
    const prehigh = parseFloat(pre_high.value);
    const prelow = parseFloat(pre_low.value);
    const tdyhigh = parseFloat(tdy_high.value);
    const tdylow = parseFloat(tdy_low.value);

    // Validate the input
    if (isNaN(prehigh) || isNaN(prelow) || isNaN(tdyhigh) || isNaN(tdylow)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    // Calculate the two-day high and low
    const twoDHH = Math.max(prehigh, tdyhigh);
    const twoDLL = Math.min(prelow, tdylow);

    if (niftyFtrs.checked) {
        // Nifty Futures calculations
        const title = "NIFTY FUTURES";

        buyEntry = twoDHH * (1 + 0.00125); // Buy entry
        buyTarget = buyEntry * (1 + 0.0125); // Buy target
        buyStoploss1 = Math.max(buyEntry * (1 - 0.0125), twoDLL * (1 - 0.00125)); // Buy stoploss1
        buyStoploss2 = Math.max(buyEntry, twoDLL * (1 - 0.00125)); // Buy stoploss2

        // Sell calculations
        sellEntry = twoDLL * (1 - 0.00125); // Sell entry
        sellTarget = sellEntry * (1 - 0.0125); // Sell target
        sellStoploss1 = Math.min(sellEntry * (1 + 0.0125), twoDHH * (1 + 0.00125)); // Sell stoploss1
        sellStoploss2 = Math.min(sellEntry, twoDHH * (1 + 0.00125)); // Sell stoploss2

        // Store Nifty values in localStorage
        localStorage.setItem('title', title);
        localStorage.setItem('buyEntry', buyEntry.toFixed(1));
        localStorage.setItem('buyTarget', buyTarget.toFixed(1));
        localStorage.setItem('buyStoploss1', buyStoploss1.toFixed(1));
        localStorage.setItem('buyStoploss2', buyStoploss2.toFixed(1));
        localStorage.setItem('sellEntry', sellEntry.toFixed(1));
        localStorage.setItem('sellTarget', sellTarget.toFixed(1));
        localStorage.setItem('sellStoploss1', sellStoploss1.toFixed(1));
        localStorage.setItem('sellStoploss2', sellStoploss2.toFixed(1));

    } else if (BankniftyFtrs.checked) {
        // Bank Nifty calculations
        const title = "BANK-NIFTY FUTURES";

        buyEntry = twoDHH * (1 + 0.0015); // Buy entry
        buyTarget = buyEntry * (1 + 0.015); // Buy target
        buyStoploss1 = Math.max(buyEntry * (1 - 0.015), twoDLL * (1 - 0.0015)); // Buy stoploss1
        buyStoploss2 = Math.max(buyEntry, twoDLL * (1 - 0.0015)); // Buy stoploss2

        // Sell calculations with corrected formulas
        sellEntry = twoDLL * (1 - 0.0015); // Sell entry
        sellTarget = sellEntry * (1 - 0.015); // Sell target
        sellStoploss1 = Math.min(sellEntry * (1 + 0.015), twoDHH * (1 + 0.0015)); // Sell stoploss1 for Bank Nifty
        sellStoploss2 = Math.min(sellEntry, twoDHH * (1 + 0.0015)); // Sell stoploss2 for Bank Nifty

        // Store Bank Nifty values in localStorage
        localStorage.setItem('title', title);
        localStorage.setItem('buyEntry', buyEntry.toFixed(1));
        localStorage.setItem('buyTarget', buyTarget.toFixed(1));
        localStorage.setItem('buyStoploss1', buyStoploss1.toFixed(1));
        localStorage.setItem('buyStoploss2', buyStoploss2.toFixed(1));
        localStorage.setItem('sellEntry', sellEntry.toFixed(1));
        localStorage.setItem('sellTarget', sellTarget.toFixed(1));
        localStorage.setItem('sellStoploss1', sellStoploss1.toFixed(1));
        localStorage.setItem('sellStoploss2', sellStoploss2.toFixed(1));
    } else {
        alert('Please select an option.');
        return;
    }

    // Redirect to the next page
    window.location.href = 'index2.html';
}
