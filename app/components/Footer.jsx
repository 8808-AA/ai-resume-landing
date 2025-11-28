// export default function Footer() {
//   return (
//     <footer className="border-t border-[#FCEFCB]/40 bg-[#FCEFCB] text-[#945034] mt-16">
//       <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm sm:flex-row sm:px-6 lg:px-8">
//         <p>© {new Date().getFullYear()} ResumeGen AI. All rights reserved.</p>
//         <div className="flex gap-4">
//           <a href="#" className="hover:text-[#945034]/80">
//             Privacy
//           </a>
//           <a href="#" className="hover:text-[#945034]/80">
//             Terms
//           </a>
//           <a href="#" className="hover:text-[#945034]/80">
//             Support
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
// 
export  default function Footer() {
  return (
    <footer className="bg-[#945034] text-[#FCEFCB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FCEFCB] flex items-center justify-center">
                <span className="text-[#945034] font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">AIResume</span>
            </div>
            <p className="text-[#FCEFCB]/80 text-sm leading-relaxed">
              Craft your perfect resume with AI-powered insights and real-time optimization.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 11-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.5 4-4 6l-1 1h2z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#templates" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Templates
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#security" className="text-[#FCEFCB]/80 hover:text-[#FCEFCB] transition-colors text-sm">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FCEFCB]/20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[#FCEFCB]/70 text-sm">© 2025 AIResume. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[#FCEFCB]/70 hover:text-[#FCEFCB] transition-colors text-sm">
              Status
            </a>
            <a href="#" className="text-[#FCEFCB]/70 hover:text-[#FCEFCB] transition-colors text-sm">
              Support
            </a>
            <a href="#" className="text-[#FCEFCB]/70 hover:text-[#FCEFCB] transition-colors text-sm">
              Feedback
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}