export default function Field({ label, suffix, ...rest }) {
    return (
        <label className="grid gap-1">
            <span className="text-sm text-slate-600">{label}</span>
            <div className="relative">
                <input
                    {...rest}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                {suffix && <span className="absolute right-3 top-2.5 text-slate-400 text-sm">{suffix}</span>}
            </div>
        </label>
    );
}
