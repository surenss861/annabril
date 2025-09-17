import Field from "../../components/Field";
import { useState } from "react";
import { fmt, principalFromPayment, toNumber } from "../../lib/mortgage";

/**
 * Simple CAN-style GDS/TDS approximation:
 * - GDS 32%: (Mortgage PI + taxes + heat + 50% condo fees) ≤ 0.32 * gross monthly income
 * - TDS 40%: (All debt incl. above + other monthly debts) ≤ 0.40 * gross monthly income
 * We solve for max "PI" (principal+interest) then invert to mortgage principal.
 */
export default function Affordability() {
    const [annualIncome, setAnnualIncome] = useState("120000");
    const [otherDebts, setOtherDebts] = useState("400"); // monthly debts
    const [down, setDown] = useState("150000");
    const [rate, setRate] = useState("4.39");
    const [years, setYears] = useState("25");
    const [taxes, setTaxes] = useState("350"); // monthly
    const [heat, setHeat] = useState("100");
    const [condo, setCondo] = useState("0");

    const mIncome = toNumber(annualIncome) / 12;
    const nonPIHousing = toNumber(taxes) + toNumber(heat) + 0.5 * toNumber(condo);

    const maxHousingGDS = 0.32 * mIncome - nonPIHousing;
    const maxTotalDebt = 0.40 * mIncome - toNumber(otherDebts);
    const maxHousingTDS = maxTotalDebt - nonPIHousing;

    const maxPI = Math.max(0, Math.min(maxHousingGDS, maxHousingTDS));
    const maxMortgage = principalFromPayment(maxPI, toNumber(rate), toNumber(years));
    const maxPrice = Math.max(0, maxMortgage + toNumber(down));

    return (
        <section className="grid md:grid-cols-2 gap-8">
            <div className="card p-5 grid gap-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold">Affordability Calculator</h2>
                <Field label="Gross Annual Income" value={annualIncome} onChange={e => setAnnualIncome(e.target.value)} />
                <div className="grid grid-cols-2 gap-3">
                    <Field label="Monthly Other Debts" value={otherDebts} onChange={e => setOtherDebts(e.target.value)} />
                    <Field label="Down Payment" value={down} onChange={e => setDown(e.target.value)} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <Field label="Taxes (mo.)" value={taxes} onChange={e => setTaxes(e.target.value)} />
                    <Field label="Heat (mo.)" value={heat} onChange={e => setHeat(e.target.value)} />
                    <Field label="Condo Fees (mo.)" value={condo} onChange={e => setCondo(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <Field label="Interest Rate (APR %)" value={rate} onChange={e => setRate(e.target.value)} />
                    <Field label="Amortization (years)" value={years} onChange={e => setYears(e.target.value)} />
                </div>
            </div>

            <aside className="card p-5 grid gap-2 bg-white rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-semibold">Estimated Max Purchase Price</h3>
                <div className="text-3xl font-bold text-primary">{fmt(maxPrice)}</div>
                <p className="text-xs text-slate-500">
                    Uses 32% GDS / 40% TDS guideline with your taxes/heat/condo inputs.
                    Results are estimates only; lenders may apply different criteria.
                </p>
            </aside>
        </section>
    );
}
