

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-20 bg-[#FCEFCB]">
//       <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-[#FCEFCB] sm:px-6 lg:px-8 bg-[#FCEFCB]">
//         <div className="flex items-center gap-2">
//           {/* <div className="h-8 w-8 rounded-lg " /> */}
//           <span className="text-3xl font-bold tracking-tight text-[#945034]">
//             ResumeGen AI
//           </span>
//         </div>
//         <button className="rounded-md bg-[#945034] px-4 py-2 text-sm font-medium text-[#FCEFCB] hover:bg-[#f9e7b5]">
//           Build my resume
//         </button>
        
//       </nav>
//     </header>
//   );
// }

export default function Navbar() {
  return (
    <header className="bg-[#945034] text-[#FCEFCB]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#FCEFCB] flex items-center justify-center">
            <span className="text-[#945034] font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">ResumeGen AI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Pricing
          </a>
          <a href="#about" className="text-sm font-medium hover:opacity-80 transition-opacity">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="px-6 py-2 text-[#945034] bg-[#FCEFCB] rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-6 py-2 bg-transparent text-[#FCEFCB] rounded-full font-medium border-2 border-[#FCEFCB] hover:bg-[#FCEFCB]/10 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}