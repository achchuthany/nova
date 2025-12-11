'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code, GraduationCap } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const roles = ['Software Engineer', 'Educator', 'System Architect'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">IT Instructor at University of Jaffna</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              <span className="block text-foreground">Yogarajah</span>
              <span className="block gradient-text">Achchuthan</span>
            </h1>

            <div className="flex items-center space-x-2 mb-8">
              <Code className="w-5 h-5 text-primary" />
              <div className="flex items-center space-x-2 text-xl text-foreground/80">
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {role}
                    {index < roles.length - 1 && <span className="mx-2">•</span>}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-foreground/70 mb-8 max-w-lg"
            >
              Passionate about building scalable enterprise systems and mentoring the next
              generation of technology professionals. Bridging academic excellence with
              industry-relevant solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button size="lg">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative">
              {/* Placeholder for profile image - you can replace this with actual image */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-3xl absolute -inset-4" />
              <div className="w-80 h-80 rounded-full glass flex items-center justify-center relative">
                <div className="text-8xl font-heading font-bold gradient-text">YA</div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="text-sm font-bold">5000+</div>
                <div className="text-xs">Students</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg"
              >
                <div className="text-sm font-bold">20+</div>
                <div className="text-xs">Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
