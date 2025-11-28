const testimonials = [
  {
    name: "Aarav Sharma",
    role: "BCA Student",
    quote:
      "ResumeGen AI turned my messy resume into a clean one-page CV. I got my first internship interview in a week.",
  },
  {
    name: "Priya Singh",
    role: "Final-year CS",
    quote:
      "The bullet point suggestions saved me hours. I just edited the text and downloaded the PDF.",
  },
  {
    name: "Rahul Mehta",
    role: "Fresh graduate",
    quote:
      "I used the ATS check feature and fixed my resume score before applying.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 bg-[#945034] text-[#FCEFCB]">
      <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Loved by students like you
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base text-[#FCEFCB]/80">
        Real stories from people who used ResumeGen AI to land interviews.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col justify-between rounded-2xl border border-[#FCEFCB]/40 bg-[#FCEFCB]/10 p-6"
          >
            <p className="text-sm text-[#FCEFCB]/95">“{t.quote}”</p>
            <figcaption className="mt-4 text-sm">
              <span className="font-medium text-[#FCEFCB]">{t.name}</span>
              <span className="text-[#FCEFCB]/80"> · {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
