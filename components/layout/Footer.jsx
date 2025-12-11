import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-foreground/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Yogarajah Achchuthan</h3>
            <p className="text-foreground/60 text-sm">
              IT Instructor at University of Jaffna, Software Engineer, and passionate educator
              building scalable systems and mentoring future technologists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/teaching" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Teaching
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Yogarajah Achchuthan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
