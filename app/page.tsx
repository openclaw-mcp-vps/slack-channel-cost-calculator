export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          SaaS Optimization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know the Real Cost of Every{" "}
          <span className="text-[#58a6ff]">Slack Channel</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Slack workspace and instantly see cost-per-member for every channel. Spot bloated, low-value channels draining your budget and fix them fast.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card surprises.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-[#8b949e] mt-1">Users needed to matter</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">$19</p>
            <p className="text-xs text-[#8b949e] mt-1">Flat monthly price</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">1-click</p>
            <p className="text-xs text-[#8b949e] mt-1">Slack OAuth setup</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Slack workspace analysis",
              "Cost-per-member breakdown per channel",
              "Low-value channel detection",
              "Monthly optimization reports",
              "Export to CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the cost calculation work?",
              a: "We divide your total Slack subscription cost by active workspace members, then allocate that per-seat cost across each channel based on membership. Channels with many inactive members show a high cost-per-value ratio."
            },
            {
              q: "Is my Slack data stored?",
              a: "Only aggregated channel membership counts and metadata are stored — never message content. Analysis results are saved so you can track improvements over time."
            },
            {
              q: "What Slack plan do I need?",
              a: "Any paid Slack plan (Pro, Business+, or Enterprise Grid) works. The tool is most valuable for workspaces with 50 or more users where channel sprawl becomes costly."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl bg-[#161b22] p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Slack Channel Cost Calculator. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
