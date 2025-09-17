import Field from "../../components/Field";
import { useState } from "react";
import { fmt, mortgagePayment, principalPaidOverYears, toNumber } from "../../lib/mortgage";

/** Simple 5-year comparison (illustrative):
 * Buy monthly outflow = PI + taxes + maintenance
 * Equity after 5y = principal repaid + appreciation
 * Net 5y position ≈ Equity - total outflow
 */
export default function RentVsBuy() {
    const [rent, setRent] = useState("2600");
    const [price, setPrice] = useState("700000");
    const [down, setDown] = useState("140000");
    const [rate, setRate] = useState("4.39");
    const [years, setYears] = useState("25");
    const [taxes, setTaxes] = useState("350");
    const [maintPct, setMaintPct] = useState("1"); // % of home price per year
    const [appreciation, setAppreciation] = useState("2.5"); // %/yr
    const horizon = 5;

    const principal = Math.max(0, toNumber(price) - toNumber(down));
    const monthlyPI = mortgagePayment(principal, toNumber(rate), toNumber(years));
    const monthlyMaint = (toNumber(price) * (toNumber(maintPct) / 100)) / 12;
    const monthlyOwner = monthlyPI + toNumber(taxes) + monthlyMaint;

    const totalRent5y = toNumber(rent) * 12 * horizon;
    const totalOwner5y = monthlyOwner * 12 * horizon;

    const { paidPrincipal } = principalPaidOverYears(principal, toNumber(rate), toNumber(years), horizon);
    const appreciated = toNumber(price) * Math.pow(1 + toNumber(appreciation) / 100, horizon) - toNumber(price);
    const equity5y = paidPrincipal + Math.max(0, appreciated);
    const netRent = -totalRent5y;
    const netBuy = equity5y - totalOwner5y;

    return (
        <section className="grid md:grid-cols-2 gap-8">
            <div className="card p-5 grid gap-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold">Rent vs Buy (5-Year)</h2>
                <div className="grid grid-cols-2 gap-3">
                    <Field label="Current Rent (mo.)" value={rent} onChange={e => setRent(e.target.value)} />
                    <Field label="Home Price" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <Field label="Down Payment" value={down} onChange={e => setDown(e.target.value)} />
                    <Field label="Taxes (mo.)" value={taxes} onChange={e => setTaxes(e.target.value)} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <Field label="Rate (APR %)" value={rate} onChange={e => setRate(e.target.value)} />
                    <Field label="Amort. (yrs)" value={years} onChange={e => setYears(e.target.value)} />
                    <Field label="Maint. (%/yr)" value={maintPct} onChange={e => setMaintPct(e.target.value)} />
                </div>
                <Field label="Appreciation (%/yr)" value={appreciation} onChange={e => setAppreciation(e.target.value)} />
            </div>

            <aside className="card p-5 grid gap-2 bg-white rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-semibold">5-Year Snapshot</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <p className="text-slate-500">Monthly Owner Outflow</p>
                        <p className="font-semibold">{fmt(monthlyOwner)}</p>
                    </div>
                    <div>
                        <p className="text-slate-500">Monthly PI Only</p>
                        <p className="font-semibold">{fmt(monthlyPI)}</p>
                    </div>
                    <div>
                        <p className="text-slate-500">Total Rent (5y)</p>
                        <p className="font-semibold">{fmt(totalRent5y)}</p>
                    </div>
                    <div>
                        <p className="text-slate-500">Total Owner Outflow (5y)</p>
                        <p className="font-semibold">{fmt(totalOwner5y)}</p>
                    </div>
                    <div>
                        <p className="text-slate-500">Equity Built (est.)</p>
                        <p className="font-semibold">{fmt(equity5y)}</p>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="card p-4 text-center bg-gray-50 rounded-lg">
                        <p className="text-xs uppercase tracking-wide text-slate-500">Net Rent (5y)</p>
                        <p className="text-2xl font-bold">{fmt(netRent)}</p>
                    </div>
                    <div className="card p-4 text-center bg-red-50 rounded-lg">
                        <p className="text-xs uppercase tracking-wide text-slate-500">Net Buy (5y)</p>
                        <p className="text-2xl font-bold text-primary">{fmt(netBuy)}</p>
                    </div>
                </div>

                <p className="text-xs text-slate-500 mt-2">
                    Illustrative only; excludes closing/CMHC/insurance, and assumes steady inputs.
                </p>
            </aside>
        </section>
    );
}
