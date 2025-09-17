export const toNumber = (v) =>
    typeof v === "number" ? v : parseFloat((v || "0").toString().replace(/,/g, ""));

export const fmt = (n) =>
    n.toLocaleString(undefined, { style: "currency", currency: "CAD", maximumFractionDigits: 2 });

/** Monthly payment for principal P, annual rate (percent), years N */
export function mortgagePayment(principal, annualRatePct, years) {
    const r = annualRatePct / 100 / 12; // monthly rate
    const n = years * 12;               // number of payments
    if (r === 0) return principal / n;
    const pow = Math.pow(1 + r, n);
    return principal * (r * pow) / (pow - 1);
}

/** Invert payment to get principal you can afford for a payment M */
export function principalFromPayment(M, annualRatePct, years) {
    const r = annualRatePct / 100 / 12;
    const n = years * 12;
    if (r === 0) return M * n;
    const pow = Math.pow(1 + r, n);
    return M * (pow - 1) / (r * pow);
}

/** Amortization schedule (lightweight equity estimate) */
export function principalPaidOverYears(principal, annualRatePct, years, horizonYears) {
    const r = annualRatePct / 100 / 12;
    const n = years * 12;
    const m = mortgagePayment(principal, annualRatePct, years);
    let balance = principal;
    let paidPrincipal = 0;

    for (let i = 0; i < Math.min(horizonYears * 12, n); i++) {
        const interest = balance * r;
        const principalPart = Math.max(0, m - interest);
        balance = Math.max(0, balance - principalPart);
        paidPrincipal += principalPart;
    }
    return { paidPrincipal, balance };
}
