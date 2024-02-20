"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname()
	
	return (
		<div className="grid bg-black items-center px-4 md:px-6">
			<div className="container grid gap-4">
				<div className="hidden lg:flex">
					<div className="flex flex-col gap-4 h-full">
						<div className="rounded-lg border border-gray-200  dark:border-gray-800 dark:bg-gray-950">
							<nav className="flex flex-col gap-0.5 text-center h-auto">
								<ul>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/76225' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/76225">7.62x25mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/918' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/918">9x18mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/919' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/919">9x19mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/921' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/921">9x21mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/357' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/357">.357 Magnum
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/45' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/45">.45 ACP
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/4630' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/4630">4.6x30mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/5728' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/5728">5.7x28mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/54539' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/54539">5.45x39mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/55645' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/55645">5.56x45mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/76239' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/76239">7.62x39mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/939' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/939">9x39mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/76251' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/76251">7.62x51mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/300' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/300">.300 Blackout
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/6851' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/6851">6.8x51mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/76254' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/76254">7.62x54mmR
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/338' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/338">.338 Lapua Magnum
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/12755' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/12755">12.7x55mm STs-130
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/366' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/366">.366 TKM
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/1270' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/1270">12x70mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/2070' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/2070">20x70mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/2375' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/2375">23x75mm
										</Link>
									</li>
									<li>
										<Link className={ `inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium ${pathname === '/ammo/4046' ? 'bg-blue-500 text-white' : ''}` }
											href="/ammo/4046">40x46mm
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}