'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Card component with hover effects
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.glass - Enable glassmorphism effect
 * @param {string} props.className - Additional CSS classes
 */
export default function Card({ children, glass = false, className, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-xl p-6 transition-shadow hover:shadow-xl',
        glass ? 'glass' : 'bg-foreground/5 border border-foreground/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
