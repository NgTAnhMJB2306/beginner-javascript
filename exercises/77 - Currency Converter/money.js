const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};

const endpoint = "https://api.exchangeratesapi.io/latest";

const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const rateByBase = {};
const form = document.querySelector('.app form');

function generateOptions(options) {
    // return Object.entries(options).map((arr) => 
    return Object.entries(options)
        .map(([currencyCode, currencyName]) =>
            `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
            // console.log(arr);
            // console.log(currencyCode, currencyName);
        ).join("");
}

async function fetchRates(base = "USD") {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;
}

async function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!rateByBase[from]) {
        console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's go get it!`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        rateByBase[from] = rates;
    }

    const rate = rateByBase[from].rates[to];
    const convertAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertAmount} in ${to}`);
    return convertAmount;
}

async function handleInput(e) {
    const rawAmount = await convert(
        fromInput.value,
        fromSelect.value,
        toSelect.value
    );
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(rawAmount);
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

function formatCurrency(amount, currency) {
    return Intl.NumberFormat("en-US", {
        style: 'currency',
        currency
    }).format(amount);

}

const optionsHTML = generateOptions(currencies);
// console.log(optionsHTML);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;
form.addEventListener('input', handleInput);