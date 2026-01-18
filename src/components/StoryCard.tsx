import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from './ScrollReveal';

interface StoryCardProps {
  title: string;
  description: string;
  image?: string;
  quote?: string;
  author?: string;
  delay?: number;
  reverse?: boolean;
}

export function StoryCard({ title, description, image, quote, author, delay = 0, reverse = false }: StoryCardProps) {
  return (
    <ScrollReveal delay={delay} direction={reverse ? 'right' : 'left'}>
      <div className={`flex flex-col gap-8 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
        {image && (
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img src={image} alt={title} className="w-full h-auto transform transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        )}
        <div className={`lg:w-1/2 ${image ? '' : 'w-full'}`}>
          <Card className="border-l-4 border-l-c2r-accent bg-gradient-to-br from-background to-muted/30">
            <CardContent className="pt-6">
              <h3 className="mb-4 text-2xl font-bold">{title}</h3>
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{description}</p>
              {quote && (
                <blockquote className="border-l-4 border-c2r-primary pl-4 italic text-muted-foreground">
                  <p className="mb-2">"{quote}"</p>
                  {author && <footer className="text-sm font-semibold">— {author}</footer>}
                </blockquote>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollReveal>
  );
}
