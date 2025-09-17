export default function Book() {
    return (
        <section className="grid md:grid-cols-2 gap-8 items-start">
            <div className="card p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold">Book a 15-Minute Strategy Call</h2>
                <p className="mt-2 text-slate-600">
                    Pick a time that works for you. We'll review your goals and outline next steps.
                </p>
                <div className="mt-4 aspect-video rounded-xl bg-black/5 grid place-items-center text-slate-500">
                    Calendly / scheduling embed goes here
                </div>
            </div>
            <aside className="card p-5 bg-white rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-semibold">What to have handy</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li>Approx. income & employment details</li>
                    <li>Down payment amount</li>
                    <li>Any major debts or monthly payments</li>
                </ul>
            </aside>
        </section>
    );
}
