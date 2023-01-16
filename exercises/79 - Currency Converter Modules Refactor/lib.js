// Lib.js

const endpoint = "https://api.exchangeratesapi.io/latest";
const rateByBase = {};

export async function fetchRates(base = "USD") {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;
}

export async function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!rateByBase[from]) {
        console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's go get it!`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        rateByBase[from] = rates;
    }

    // convert that amount that they passed it
    const rate = rateByBase[from].rates[to];
    const convertAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertAmount} in ${to}`);
    return convertAmount;
}