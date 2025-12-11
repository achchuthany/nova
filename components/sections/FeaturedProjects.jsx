import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getFeaturedProjects } from '@/lib/data-fetchers';

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <Section id="featured-projects">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Showcasing enterprise-grade systems that solve real-world problems and deliver
            measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{project.shortDescription}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
