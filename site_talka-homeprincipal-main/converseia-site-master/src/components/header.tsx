import { LINK_NAVIGATE } from '@/lib/constants';
import { DrawerMobile } from './drawer-mobile';

export const Header = () => {
	return (
		<header className="flex w-full max-h-64 h-full backdrop-blur-sm py-4 sticky top-0 z-30 px-2">
			<div className="flex w-full justify-between items-center max-w-7xl mx-auto gap-3">
				<div className="base:flex md:hidden">
					<DrawerMobile />
				</div>
				<div className="flex flex-col items-center leading-[0.5px]">
					<img
						src="/elements/logo.png"
						className="base:max-w-40 md:max-w-64"
						alt="logo"
					/>
				</div>

				<nav className="flex gap-8">
					<ul className="base:hidden md:flex items-center gap-8 font-semibold text-lg">
						{LINK_NAVIGATE.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="hover:text-primary transition-all"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};
