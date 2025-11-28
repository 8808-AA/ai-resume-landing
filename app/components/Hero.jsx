export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:py-24 lg:px-8 bg-[#945034] text-[#FCEFCB]">
      <div className="flex-1 text-center lg:text-left">
        {/* <p className="inline-flex items-center rounded-full bg-[#FCEFCB]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FCEFCB]">
          New • AI-powered resumes
        </p> */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Build a job‑ready resume
          <span className="block text-[#FCEFCB]"> in minutes</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm sm:text-base">
          ResumeGen AI helps students turn boring CVs into clean, ATS‑friendly
          resumes with smart bullet suggestions and instant PDF export.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <button className="w-full rounded-md bg-[#FCEFCB] px-6 py-3 text-sm font-semibold text-[#945034] shadow-sm hover:bg-[#f9e7b5] sm:w-auto">
            Build my resume
          </button>
          <button className="w-full rounded-md border border-[#FCEFCB] px-6 py-3 text-sm font-semibold text-[#FCEFCB] hover:bg-[#FCEFCB]/10 sm:w-auto">
            Watch demo
          </button>
        </div>

        {/* <p className="mt-4 text-xs text-[#FCEFCB]/80 sm:text-sm">
          No credit card needed. Try it free for students.
        </p> */}
      </div>

      <div className="flex-1">
        <div className="mx-auto w-full max-w-md rounded-2xl border border-[#[#945034]]/30 bg-[#FCEFCB] p-6 ">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#945034]">Aaniya</p>
              <p className="text-xs text-[#945034]">BCA Student • Greater Noida</p>
            </div>
            <span className="rounded-full bg-[#945034]/15 px-3 py-1 text-xs font-semibold text-[#945034]">
              ATS score 92%
            </span>
          </div>
          <div className="space-y-3 text-xs">
            <div className="rounded-lg bg-[#945034]/10 p-3">
              <p className="font-semibold text-[#945034]">Experience bullet (AI)</p>
              <p className="mt-1 text-[#945034]">
                Improved page load time by 35% by optimizing images and
                implementing lazy loading for key sections.
              </p>
            </div>
            <div className="rounded-lg bg-[#945034]/10 p-3">
              <p className="font-semibold text-[#945034]">Skills</p>
              <p className="mt-1 text-[#945034]">
                React · Next.js · Tailwind CSS · Git · TypeScript
              </p>
            </div>
            <div className="rounded-lg bg-[#945034]/10 p-3">
              <p className="font-semibold text-[#945034]">One‑click export</p>
              <p className="mt-1 text-[#945034]/90">
                Download as PDF or share a public link with recruiters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
