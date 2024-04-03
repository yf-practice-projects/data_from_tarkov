import Link from "next/link";

export default function Header() {
	return (
		<header className="py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <h1 className="text-xl font-bold text-white">data from tarkov</h1>
          </Link>
        </div>
        <nav className="hidden space-x-6 md:flex">
          <Link className="text-sm font-medium text-white hover:underline" href="/ammo/76225">
            Ammo
          </Link>
          <Link className="text-sm font-medium text-white hover:underline" href="/support">
            Support
          </Link>
          <Link className="text-sm font-medium text-white hover:underline" href="/about">
            Aboout
          </Link>
        </nav>
      </div>
    </header>
	)
}