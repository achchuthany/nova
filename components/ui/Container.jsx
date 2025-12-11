import { cn } from '@/lib/utils';

/**
 * Container component for responsive content
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional CSS classes
 */
export default function Container({ children, className, ...props }) {
  return (
    <div className={cn('container mx-auto px-4', className)} {...props}>
      {children}
    </div>
  );
}
