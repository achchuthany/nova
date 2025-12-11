import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <Section id="cta">
      <Container>
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center text-white">
            <h2 className="text-4xl font-heading font-bold mb-4">Let's Build Something Great</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need consultation on enterprise systems, have a project in mind, or want
              to discuss teaching opportunities, I'd love to hear from you.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </Container>
    </Section>
  );
}
