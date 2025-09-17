import { useState } from "react";
import Field from "../components/Field";

const steps = ["Basics", "Income", "Property", "Review"];

export default function PreApproval() {
    const [i, setI] = useState(0);
    const next = () => setI((s) => Math.min(s + 1, steps.length - 1));
    const prev = () => setI((s) => Math.max(s - 1, 0));

    return (
        <section className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Get Pre-Approved in 24 Hours</h1>
                <p className="text-lg text-gray-600">
                    Secure your rate and start house hunting with confidence. Anne Brill will guide you through every step.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Licensed M08005655 • Access to 50+ lenders
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                {steps.map((s, idx) => (
                    <div key={s} className={`flex-1 h-2 rounded ${idx <= i ? "bg-primary" : "bg-black/10"}`} />
                ))}
            </div>
            <p className="mt-2 text-sm text-slate-600">Step {i + 1} of {steps.length}: {steps[i]}</p>

            <div className="card p-5 mt-4 grid gap-4 bg-white rounded-xl shadow-sm border border-gray-200">
                {i === 0 && (
                    <>
                        <Field label="First & Last Name" placeholder="Jane Doe" />
                        <Field label="Email" placeholder="jane@email.com" />
                        <Field label="Phone" placeholder="(xxx) xxx-xxxx" />
                    </>
                )}
                {i === 1 && (
                    <>
                        <Field label="Annual Income (before tax)" placeholder="120000" />
                        <Field label="Monthly Debts" placeholder="400" />
                        <Field label="Down Payment" placeholder="150000" />
                    </>
                )}
                {i === 2 && (
                    <>
                        <Field label="Target Purchase Price" placeholder="700000" />
                        <Field label="Property Type" placeholder="Detached / Condo / Town" />
                        <Field label="City / Province" placeholder="Toronto, ON" />
                    </>
                )}
                {i === 3 && (
                    <>
                        <p className="text-slate-600 text-sm">We'll email you a summary and next steps. Submitting doesn't affect credit score.</p>
                    </>
                )}

                <div className="flex justify-between">
                    <button
                        onClick={prev}
                        className="btn btn-outline px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        disabled={i === 0}
                        style={{ opacity: i === 0 ? 0.5 : 1 }}
                    >
                        Back
                    </button>
                    <button
                        onClick={i === steps.length - 1 ? undefined : next}
                        className="btn btn-primary px-6 py-2 text-white rounded-lg transition-colors"
                        style={{ backgroundColor: 'var(--primary)' }}
                    >
                        {i === steps.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </section>
    );
}
