export default function Header() {
  return (
    <header className="grid grid-cols-12 text-[#607B96] border-b border-[#1E2D3D] items-center">
      <div className="lg:col-span-2 col-span-11 lg:border-r border-[#1E2D3D] py-4 pl-4">
        <span>Benjamin Lin</span>
      </div>
      <div className="col-span-10 hidden lg:block">
        <nav className="flex justify-between items-center">
          <div>
            <button className="px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-white border-b-2 border-[#FEA55F] text-white">
             _hello
            </button>
            <button className="px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-white border-b-transparent">
              _about-me
            </button>
            <button className="px-5 py-4 border-r border-r-[#1E2D3D] border-b-2 h-full transition-all hover:text-white border-b-transparent">
              _projects
            </button>
          </div>
          <button
            id="border-b"
            className="px-5 py-4 border-l border-l-[#1E2D3D] border-b-2 h-full transition-all hover:text-white border-b-transparent"
          >
            _contact-me
          </button>
        </nav>
      </div>
      <button className="justify-self-center text-xl block lg:hidden">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
}
