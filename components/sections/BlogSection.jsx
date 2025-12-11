import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getLatestBlogPosts } from '@/lib/data-fetchers';
import { formatDate } from '@/lib/utils';

export default async function BlogSection() {
  const posts = await getLatestBlogPosts(3);

  return (
    <Section id="blog" className="bg-foreground/5">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">Latest from Blog</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Insights on software engineering, web development, and technology education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col">
              <Badge variant="accent" className="mb-4 self-start">
                {post.category}
              </Badge>

              <h3 className="text-xl font-heading font-bold mb-3">{post.title}</h3>
              <p className="text-foreground/60 text-sm mb-4 flex-grow">{post.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-foreground/50 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {post.readingTime} min read
                </div>
              </div>

              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="outline">View All Posts</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
