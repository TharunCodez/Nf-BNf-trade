// Get inputs and elements
const pre_high = document.getElementById("pre_high");
const pre_low = document.getElementById("pre_low");
const tdy_high = document.getElementById("tdy_high");
const tdy_low = document.getElementById("tdy_low");

const niftyFtrs = document.getElementById("niftyFtrs");
const BankniftyFtrs = document.getElementById("BankniftyFtrs");

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

    if (BankniftyFtrs.checked) {
        const title = "BANK-NIFTY FUTURES";

        // Bank Nifty Sell Calculations
        const sellEntry = twoDLL * (1 - 0.0015); // Sell entry = Low - 0.15%
        const sellStoploss1 = Math.min(sellEntry * (1 + 0.015), twoDHH * (1 + 0.0015)); // Correct Stoploss 1
        const sellStoploss2 = Math.min(sellEntry, twoDHH * (1 + 0.0015)); // Correct Stoploss 2

        // Store Bank Nifty values in localStorage
        localStorage.setItem('title', title);
        localStorage.setItem('sellEntry', sellEntry.toFixed(1));
        localStorage.setItem('sellStoploss1', sellStoploss1.toFixed(1));
        localStorage.setItem('sellStoploss2', sellStoploss2.toFixed(1));

        console.log("Sell Entry:", sellEntry);
        console.log("Sell Stoploss 1:", sellStoploss1);
        console.log("Sell Stoploss 2:", sellStoploss2);
    } else if (niftyFtrs.checked) {
        const title = "NIFTY FUTURES";

        // Nifty Sell Calculations
        const sellEntry = twoDLL * (1 - 0.00125); // Sell entry = Low - 0.125%
        const sellStoploss1 = Math.min(sellEntry * (1 + 0.0125), twoDHH * (1 + 0.00125)); // Correct Stoploss 1
        const sellStoploss2 = Math.min(sellEntry, twoDHH * (1 + 0.00125)); // Correct Stoploss 2

        // Store Nifty values in localStorage
        localStorage.setItem('title', title);
        localStorage.setItem('sellEntry', sellEntry.toFixed(1));
        localStorage.setItem('sellStoploss1', sellStoploss1.toFixed(1));
        localStorage.setItem('sellStoploss2', sellStoploss2.toFixed(1));

        console.log("Sell Entry:", sellEntry);
        console.log("Sell Stoploss 1:", sellStoploss1);
        console.log("Sell Stoploss 2:", sellStoploss2);
    } else {
        alert('Please select an option.');
        return;
    }

    // Redirect to the next page
    window.location.href = 'index2.html';
}
