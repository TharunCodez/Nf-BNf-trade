const pre_high = document.getElementById("pre_high");
const pre_low = document.getElementById("pre_low");
const tdy_high = document.getElementById("tdy_high");
const tdy_low = document.getElementById("tdy_low");

const niftyFtrs = document.getElementById("niftyFtrs");
const BankniftyFtrs = document.getElementById("BankniftyFtrs");

let buyEntry, buyTarget, buyStoploss1, buyStoploss2;
let sellEntry, sellTarget, sellStoploss1, sellStoploss2;

function calc() {
    const prehigh = parseFloat(pre_high.value);
    const prelow = parseFloat(pre_low.value);
    const tdyhigh = parseFloat(tdy_high.value);
    const tdylow = parseFloat(tdy_low.value);

    if (isNaN(prehigh) || isNaN(prelow) || isNaN(tdyhigh) || isNaN(tdylow)) {
        alert('Please enter valid numbers in all fields.');
        return;
    }

    const twoDHH = Math.max(prehigh, tdyhigh);
    const twoDLL = Math.min(prelow, tdylow);

    if (niftyFtrs.checked) {
        const title = "NIFTY FUTURES";

        buyEntry = twoDHH * (1 + 0.00125);
        buyTarget = buyEntry * (1 + 0.0125);
        buyStoploss1 = Math.max(buyEntry * (1 - 0.0125), twoDLL * (1 - 0.00125));
        buyStoploss2 = Math.max(buyEntry, twoDLL * (1 - 0.00125));

        sellEntry = twoDLL * (1 - 0.00125);
        sellTarget = sellEntry * (1 - 0.0125);
        sellStoploss1 = Math.min(sellEntry * (1 + 0.0125), twoDHH * (1 + 0.00125));
        sellStoploss2 = Math.min(sellEntry, twoDHH * (1 + 0.00125));

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
        const title = "BANK-NIFTY FUTURES";

        buyEntry = twoDHH * (1 + 0.0015);
        buyTarget = buyEntry * (1 + 0.015);
        buyStoploss1 = Math.max(buyEntry * (1 - 0.015), twoDLL * (1 - 0.0015));
        buyStoploss2 = Math.max(buyEntry, twoDLL * (1 - 0.0015));

        sellEntry = twoDLL * (1 - 0.0015);
        sellTarget = sellEntry * (1 - 0.015);
        sellStoploss1 = Math.min(sellEntry * (1 + 0.015), twoDHH * (1 + 0.0015));
        sellStoploss2 = Math.min(sellEntry, twoDHH * (1 + 0.0015));

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
