const features = [
  {
    title: "Smart bullet suggestions",
    desc: "Describe your work in simple words and let the AI rewrite it in a strong, professional tone.",
  },
  {
    title: "ATS‑friendly templates",
    desc: "Clean layouts that pass Applicant Tracking Systems used by companies to scan resumes.",
  },
  {
    title: "Instant PDF export",
    desc: "Download polished PDFs in one click and keep multiple versions for different job roles.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 bg-[#FCEFCB] text-[#945034]">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl ">
          Why students love ResumeGen AI
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#945034]/80">
          Everything you need to go from a blank page to a confident resume in under 15 minutes.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col rounded-2xl border border-[#945034]/30 bg-[#945034]/5 p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#945034]/15 text-[#945034]">
              ✨
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-[#945034]/85">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
