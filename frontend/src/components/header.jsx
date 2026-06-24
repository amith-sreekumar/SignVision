function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-6">

        <div className="flex flex-col items-center">

          <h1 className="text-4xl font-bold tracking-wide text-white">
            SignVision
          </h1>

          <p className="text-sm text-slate-300 mt-2">
            Real-Time Sign Language Translation Platform
          </p>

        </div>

      </div>
    </header>
  );
}

export default Header;