import HeroSection from '@/components/sections/HeroSection';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import SkillsSection from '@/components/sections/SkillsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Home | Yogarajah Achchuthan',
  description: 'IT Instructor at University of Jaffna and Software Engineer specializing in enterprise systems and web development.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
