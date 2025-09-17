import Field from "../../components/Field";
import { useState } from "react";
import { fmt, mortgagePayment, toNumber } from "../../lib/mortgage";

export default function Payment() {
    const [price, setPrice] = useState("700000");
    const [down, setDown] = useState("140000"); // 20%
    const [rate, setRate] = useState("4.39");
    const [years, setYears] = useState("25");

    const principal = Math.max(0, toNumber(price) - toNumber(down));
    const monthly = mortgagePayment(principal, toNumber(rate), toNumber(years));

    return (
        <section className="grid md:grid-cols-2 gap-8">
            <div className="card p-5 grid gap-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold">Payment Calculator</h2>
                <Field label="Home Price" value={price} onChange={e => setPrice(e.target.value)} />
                <Field label="Down Payment" value={down} onChange={e => setDown(e.target.value)} />
                <div className="grid grid-cols-2 gap-3">
                    <Field label="Interest Rate (APR %)" value={rate} onChange={e => setRate(e.target.value)} />
                    <Field label="Amortization (years)" value={years} onChange={e => setYears(e.target.value)} />
                </div>
            </div>

            <aside className="card p-5 grid gap-2 bg-white rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-semibold">Estimated Monthly Payment</h3>
                <div className="text-3xl font-bold text-primary">{fmt(monthly)}</div>
                <p className="text-xs text-slate-500">
                    Based on principal of {fmt(principal)} over {years} years at {rate}% APR.
                    For illustration only. Not a commitment to lend.
                </p>
            </aside>
        </section>
    );
}
