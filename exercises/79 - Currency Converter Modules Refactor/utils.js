// Utils.js

export function generateOptions(options) {
    // return Object.entries(options).map((arr) => 
    return Object.entries(options)
        .map(([currencyCode, currencyName]) =>
            `<option value="${currencyCode}">${currencyCode} 
            - ${currencyName}</option>`
            // console.log(arr);
            // console.log(currencyCode, currencyName);
        ).join("");
}

export function formatCurrency(amount, currency) {
    return Intl.NumberFormat("en-US", {
        style: 'currency',
        currency
    }).format(amount);
}