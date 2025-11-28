export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 bg-[#FCEFCB] text-[#945034]">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Simple pricing for students
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#945034]/80">
          Start free, upgrade only when you are ready to apply for jobs.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#945034]/30 bg-[#FCEFCB] p-8">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="mt-1 text-sm text-[#945034]/80">
            For trying ResumeGen AI and creating your first resume.
          </p>
          <p className="mt-4 text-3xl font-bold">₹0</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>• 1 resume template</li>
            <li>• Basic AI bullet suggestions</li>
            <li>• PDF download</li>
          </ul>
          <button className="mt-6 w-full rounded-md border border-[#945034] px-4 py-2 text-sm font-medium text-[#945034] hover:bg-[#f5e3bd]">
            Get started
          </button>
        </div>

        <div className="rounded-2xl border border-[#945034] bg-[#945034] p-8 text-[#FCEFCB]">
          <p className="inline-flex rounded-full bg-[#FCEFCB]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#FCEFCB]">
            Most popular
          </p>
          <h3 className="mt-3 text-xl font-semibold">Pro</h3>
          <p className="mt-1 text-sm text-[#FCEFCB]/85">
            For serious internship and job applications.
          </p>
          <p className="mt-4 text-3xl font-bold">
            ₹199
            <span className="text-base font-normal text-[#FCEFCB]/80">
              {" "}
              / month
            </span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#FCEFCB]/95">
            <li>• All Free features</li>
            <li>• Unlimited resumes and versions</li>
            <li>• ATS score check & tips</li>
            <li>• Priority support</li>
          </ul>
          <button className="mt-6 w-full rounded-md bg-[#FCEFCB] px-4 py-2 text-sm font-medium text-[#945034] hover:bg-[#f9e7b5]">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </section>
  );
}
