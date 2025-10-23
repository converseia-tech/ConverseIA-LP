'use client';

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { LINK_NAVIGATE } from '@/lib/constants';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export const DrawerMobile = () => {
	const [open, setOpen] = useState(false);

	const handleCloseDrawer = () => {
		setOpen((prev) => !prev);
	};
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger>
				<Menu className="size-8" />
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Que sessão você deseja ir?</DrawerTitle>
					<DrawerDescription>
						Clique em uma das opções para ser redirecionado.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter className="space-y-3">
					{LINK_NAVIGATE.map((v) => (
						<a
							key={v.label}
							href={v.href}
							onClick={handleCloseDrawer}
							className='before:content-[""] relative before:absolute before:left-0 pl-3 before:h-full before:w-1 before:bg-primary'
						>
							{v.label}
						</a>
					))}
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};
