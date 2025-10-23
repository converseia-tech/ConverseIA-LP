'use client';

import { fadeInUp } from '@/animation/animation';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	id?: string;
}

export const AnimatedSection = ({
	children,
	className,
	id,
}: AnimatedSectionProps) => (
	<motion.section
		variants={fadeInUp}
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.2 }}
		className={`py-8 ${className}`}
		id={id}
	>
		{children}
	</motion.section>
);
